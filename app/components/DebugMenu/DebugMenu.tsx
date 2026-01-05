"use client";

import { useState, useEffect, useRef } from "react";
import { Cross2Icon, ChevronDownIcon, ChevronUpIcon, CodeIcon } from "@radix-ui/react-icons";

interface LogEntry {
  id: string;
  type: "log" | "warn" | "error" | "info";
  message: string;
  timestamp: number;
  data?: any[];
}

interface NetworkRequest {
  id: string;
  url: string;
  method: string;
  status?: number;
  statusText?: string;
  duration?: number;
  timestamp: number;
  requestHeaders?: Record<string, string>;
  responseHeaders?: Record<string, string>;
  body?: any;
  response?: any;
}

const STORAGE_KEYS = {
  logs: "debug-menu-logs",
  network: "debug-menu-network",
  isOpen: "debug-menu-is-open",
  activeTab: "debug-menu-active-tab",
};

const MAX_STORED_ITEMS = 500;

export default function DebugMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"console" | "network" | "performance">("console");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [networkRequests, setNetworkRequests] = useState<NetworkRequest[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const networkEndRef = useRef<HTMLDivElement>(null);
  const originalConsole = useRef<any>({});
  const originalFetch = useRef<typeof fetch | null>(null);
  const originalXHR = useRef<any>(null);
  const isInitialized = useRef(false);
  const interceptorsSetup = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const loadFromStorage = () => {
      try {
        const storedLogs = sessionStorage.getItem(STORAGE_KEYS.logs);
        const storedNetwork = sessionStorage.getItem(STORAGE_KEYS.network);
        const storedIsOpen = sessionStorage.getItem(STORAGE_KEYS.isOpen);
        const storedActiveTab = sessionStorage.getItem(STORAGE_KEYS.activeTab);

        if (storedLogs) {
          const parsedLogs = JSON.parse(storedLogs);
          setLogs(parsedLogs);
        }
        if (storedNetwork) {
          const parsedNetwork = JSON.parse(storedNetwork);
          setNetworkRequests(parsedNetwork);
        }
        if (storedIsOpen === "true") {
          setIsOpen(true);
        }
        if (storedActiveTab && ["console", "network", "performance"].includes(storedActiveTab)) {
          setActiveTab(storedActiveTab as "console" | "network" | "performance");
        }
      } catch (error) {
        console.error("Failed to load debug menu state:", error);
      }
    };

    if (!isInitialized.current) {
      loadFromStorage();
      isInitialized.current = true;
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized.current) return;
    try {
      sessionStorage.setItem(STORAGE_KEYS.isOpen, String(isOpen));
    } catch (error) {
      console.error("Failed to save debug menu state:", error);
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized.current) return;
    try {
      sessionStorage.setItem(STORAGE_KEYS.activeTab, activeTab);
    } catch (error) {
      console.error("Failed to save active tab:", error);
    }
  }, [activeTab]);

  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized.current) return;
    try {
      const logsToStore = logs.slice(-MAX_STORED_ITEMS);
      sessionStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(logsToStore));
    } catch (error) {
      console.error("Failed to save logs:", error);
    }
  }, [logs]);

  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized.current) return;
    try {
      const networkToStore = networkRequests.slice(-MAX_STORED_ITEMS);
      sessionStorage.setItem(STORAGE_KEYS.network, JSON.stringify(networkToStore));
    } catch (error) {
      console.error("Failed to save network requests:", error);
    }
  }, [networkRequests]);

  useEffect(() => {
    if (!isOpen) return;

    const updatePerformanceMetrics = () => {
      if (typeof window !== "undefined" && window.performance) {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType("paint");
        
        setPerformanceMetrics({
          navigation: navigation ? {
            dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
            tcp: Math.round(navigation.connectEnd - navigation.connectStart),
            request: Math.round(navigation.responseStart - navigation.requestStart),
            response: Math.round(navigation.responseEnd - navigation.responseStart),
            domProcessing: Math.round(navigation.domInteractive - navigation.responseEnd),
            load: Math.round(navigation.loadEventEnd - navigation.startTime),
          } : null,
          paint: paint ? {
            fcp: paint.find(p => p.name === "first-contentful-paint")?.startTime,
            fcpRounded: Math.round(paint.find(p => p.name === "first-contentful-paint")?.startTime || 0),
          } : null,
          memory: (performance as any).memory ? {
            used: Math.round((performance as any).memory.usedJSHeapSize / 1048576),
            total: Math.round((performance as any).memory.totalJSHeapSize / 1048576),
            limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1048576),
          } : null,
        });
      }
    };

    updatePerformanceMetrics();
    const perfInterval = setInterval(updatePerformanceMetrics, 1000);

    return () => clearInterval(perfInterval);
  }, [isOpen]);

  useEffect(() => {
    if (!isReady || interceptorsSetup.current) return;

    if (!originalConsole.current.log) {
      originalConsole.current = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info,
      };
    }

    const addLog = (type: LogEntry["type"], ...args: any[]) => {
      const message = args.map(arg => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg, null, 2);
          } catch {
            return String(arg);
          }
        }
        return String(arg);
      }).join(" ");

      setLogs(prev => {
        const newLog = {
          id: `${Date.now()}-${Math.random()}`,
          type,
          message,
          timestamp: Date.now(),
          data: args,
        };
        return [...prev, newLog];
      });
    };

    console.log = (...args: any[]) => {
      originalConsole.current.log(...args);
      addLog("log", ...args);
    };

    console.warn = (...args: any[]) => {
      originalConsole.current.warn(...args);
      addLog("warn", ...args);
    };

    console.error = (...args: any[]) => {
      originalConsole.current.error(...args);
      addLog("error", ...args);
    };

    console.info = (...args: any[]) => {
      originalConsole.current.info(...args);
      addLog("info", ...args);
    };

    if (!originalFetch.current) {
      originalFetch.current = window.fetch.bind(window);
    }
    
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const url = typeof args[0] === "string" 
        ? args[0] 
        : args[0] instanceof Request 
          ? args[0].url 
          : args[0].href || String(args[0]);
      const method = args[1]?.method || (args[0] instanceof Request ? args[0].method : undefined) || "GET";
      const startTime = performance.now();
      const requestId = `${Date.now()}-${Math.random()}`;

      const request: NetworkRequest = {
        id: requestId,
        url,
        method,
        timestamp: Date.now(),
        requestHeaders: args[1]?.headers ? Object.fromEntries(new Headers(args[1].headers)) : undefined,
        body: args[1]?.body,
      };

      setNetworkRequests(prev => {
        return [...prev, request];
      });

      try {
        const response = await originalFetch.current!(args[0], args[1]);
        const endTime = performance.now();
        const duration = Math.round(endTime - startTime);

        const clonedResponse = response.clone();
        let responseBody = null;
        try {
          const contentType = response.headers.get("content-type");
          if (contentType?.includes("application/json")) {
            responseBody = await clonedResponse.json();
          } else if (contentType?.includes("text")) {
            responseBody = await clonedResponse.text();
          }
        } catch {}

        setNetworkRequests(prev => prev.map(req => 
          req.id === requestId ? {
            ...req,
            status: response.status,
            statusText: response.statusText,
            duration,
            responseHeaders: Object.fromEntries(response.headers.entries()),
            response: responseBody,
          } : req
        ));
      } catch (error) {
        const endTime = performance.now();
        const duration = Math.round(endTime - startTime);
        setNetworkRequests(prev => prev.map(req => 
          req.id === requestId ? {
            ...req,
            status: 0,
            statusText: "Failed",
            duration,
            response: String(error),
          } : req
        ));
      }

      return originalFetch.current!(args[0], args[1]);
    };

    interceptorsSetup.current = true;
  }, [isReady]);

  useEffect(() => {
    if (activeTab === "console" && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, activeTab]);

  useEffect(() => {
    if (activeTab === "network" && networkEndRef.current) {
      networkEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [networkRequests, activeTab]);

  const getLogColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "error": return "text-red-500";
      case "warn": return "text-yellow-500";
      case "info": return "text-blue-500";
      default: return "text-palette-gray-70";
    }
  };

  const getStatusColor = (status?: number) => {
    if (!status) return "text-palette-gray-50";
    if (status >= 200 && status < 300) return "text-green-500";
    if (status >= 300 && status < 400) return "text-yellow-500";
    if (status >= 400) return "text-red-500";
    return "text-palette-gray-50";
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const clearLogs = () => {
    setLogs([]);
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(STORAGE_KEYS.logs);
      } catch (error) {
        console.error("Failed to clear logs from storage:", error);
      }
    }
  };
  
  const clearNetwork = () => {
    setNetworkRequests([]);
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(STORAGE_KEYS.network);
      } catch (error) {
        console.error("Failed to clear network from storage:", error);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-[12px] bg-palette-purple-60 hover:bg-palette-purple-70 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Toggle debug menu"
      >
        {isOpen ? (
          <Cross2Icon className="w-6 h-6" />
        ) : (
          <CodeIcon className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-4xl h-[70vh] max-h-[600px] bg-palette-white border-2 border-palette-purple-60 rounded-[12px] shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-palette-gray-20 bg-palette-purple-10">
            <h2 className="text-xl font-bold text-palette-gray-100">Debug Menu</h2>
            <div className="flex gap-2">
              <button
                onClick={() => activeTab === "console" ? clearLogs() : clearNetwork()}
                className="px-3 py-1 text-sm bg-palette-gray-20 hover:bg-palette-gray-30 text-palette-gray-70 rounded-[12px] transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-palette-gray-20 rounded transition-colors"
              >
                <Cross2Icon className="w-5 h-5 text-palette-gray-70" />
              </button>
            </div>
          </div>

          <div className="flex border-b border-palette-gray-20">
            <button
              onClick={() => setActiveTab("console")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "console"
                  ? "bg-palette-purple-60 text-white"
                  : "bg-palette-white text-palette-gray-70 hover:bg-palette-purple-10"
              }`}
            >
              Console ({logs.length})
            </button>
            <button
              onClick={() => setActiveTab("network")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "network"
                  ? "bg-palette-purple-60 text-white"
                  : "bg-palette-white text-palette-gray-70 hover:bg-palette-purple-10"
              }`}
            >
              Network ({networkRequests.length})
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "performance"
                  ? "bg-palette-purple-60 text-white"
                  : "bg-palette-white text-palette-gray-70 hover:bg-palette-purple-10"
              }`}
            >
              Performance
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-palette-gray-0">
            {activeTab === "console" && (
              <div className="space-y-2 font-mono text-xs">
                {logs.length === 0 ? (
                  <div className="text-palette-gray-50 text-center py-8">No console logs yet</div>
                ) : (
                  logs.map(log => (
                    <div
                      key={log.id}
                      className="p-2 bg-palette-white rounded-[12px] border-l-4 border-palette-gray-20 hover:bg-palette-gray-10"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-semibold ${getLogColor(log.type)}`}>
                          [{log.type.toUpperCase()}]
                        </span>
                        <span className="text-palette-gray-50 text-[10px]">
                          {formatTime(log.timestamp)}
                        </span>
                      </div>
                      <div className="text-palette-gray-70 whitespace-pre-wrap break-words">
                        {log.message}
                      </div>
                    </div>
                  ))
                )}
                <div ref={logsEndRef} />
              </div>
            )}

            {activeTab === "network" && (
              <div className="space-y-2">
                {networkRequests.length === 0 ? (
                  <div className="text-palette-gray-50 text-center py-8">No network requests yet</div>
                ) : (
                  networkRequests.map(req => (
                    <details
                      key={req.id}
                      className="p-3 bg-palette-white rounded-[12px] border border-palette-gray-20 hover:bg-palette-gray-10"
                    >
                      <summary className="cursor-pointer flex items-center gap-2">
                        <span className={`font-semibold ${getStatusColor(req.status)}`}>
                          {req.method}
                        </span>
                        <span className="text-palette-gray-70 text-sm truncate flex-1">
                          {req.url}
                        </span>
                        {req.status && (
                          <span className={`text-xs ${getStatusColor(req.status)}`}>
                            {req.status}
                          </span>
                        )}
                        {req.duration && (
                          <span className="text-xs text-palette-gray-50">
                            {req.duration}ms
                          </span>
                        )}
                        <span className="text-xs text-palette-gray-50">
                          {formatTime(req.timestamp)}
                        </span>
                      </summary>
                      <div className="mt-2 pt-2 border-t border-palette-gray-20 space-y-2 text-xs">
                        {req.requestHeaders && (
                          <div>
                            <div className="font-semibold text-palette-gray-70 mb-1">Request Headers:</div>
                            <pre className="bg-palette-gray-10 p-2 rounded-[12px] text-palette-gray-70 overflow-x-auto">
                              {JSON.stringify(req.requestHeaders, null, 2)}
                            </pre>
                          </div>
                        )}
                        {req.responseHeaders && (
                          <div>
                            <div className="font-semibold text-palette-gray-70 mb-1">Response Headers:</div>
                            <pre className="bg-palette-gray-10 p-2 rounded-[12px] text-palette-gray-70 overflow-x-auto">
                              {JSON.stringify(req.responseHeaders, null, 2)}
                            </pre>
                          </div>
                        )}
                        {req.body && (
                          <div>
                            <div className="font-semibold text-palette-gray-70 mb-1">Request Body:</div>
                            <pre className="bg-palette-gray-10 p-2 rounded-[12px] text-palette-gray-70 overflow-x-auto">
                              {typeof req.body === "string" ? req.body : JSON.stringify(req.body, null, 2)}
                            </pre>
                          </div>
                        )}
                        {req.response && (
                          <div>
                            <div className="font-semibold text-palette-gray-70 mb-1">Response:</div>
                            <pre className="bg-palette-gray-10 p-2 rounded text-palette-gray-70 overflow-x-auto max-h-40 overflow-y-auto">
                              {typeof req.response === "string" ? req.response : JSON.stringify(req.response, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    </details>
                  ))
                )}
                <div ref={networkEndRef} />
              </div>
            )}

            {activeTab === "performance" && (
              <div className="space-y-4">
                {performanceMetrics?.navigation && (
                  <div className="p-4 bg-palette-white rounded-[12px] border border-palette-gray-20">
                    <h3 className="font-semibold text-palette-gray-100 mb-3">Navigation Timing</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-palette-gray-50">DNS:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.dns}ms</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">TCP:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.tcp}ms</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">Request:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.request}ms</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">Response:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.response}ms</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">DOM Processing:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.domProcessing}ms</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">Total Load:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.navigation.load}ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {performanceMetrics?.paint && (
                  <div className="p-4 bg-palette-white rounded-[12px] border border-palette-gray-20">
                    <h3 className="font-semibold text-palette-gray-100 mb-3">Paint Timing</h3>
                    <div className="text-sm">
                      <span className="text-palette-gray-50">First Contentful Paint:</span>
                      <span className="ml-2 text-palette-gray-100 font-mono">
                        {performanceMetrics.paint.fcpRounded}ms
                      </span>
                    </div>
                  </div>
                )}

                {performanceMetrics?.memory && (
                  <div className="p-4 bg-palette-white rounded-[12px] border border-palette-gray-20">
                    <h3 className="font-semibold text-palette-gray-100 mb-3">Memory Usage</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-palette-gray-50">Used:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.memory.used} MB</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">Total:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.memory.total} MB</span>
                      </div>
                      <div>
                        <span className="text-palette-gray-50">Limit:</span>
                        <span className="ml-2 text-palette-gray-100 font-mono">{performanceMetrics.memory.limit} MB</span>
                      </div>
                    </div>
                  </div>
                )}

                {!performanceMetrics && (
                  <div className="text-palette-gray-50 text-center py-8">Performance metrics not available</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

