"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import Image from "next/image"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm Lewis's AI assistant. Tell me a little about what you're looking to build. 👋",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I had trouble connecting. Can you try again?",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-[50] w-14 h-14 bg-gold rounded-full shadow-g1-glow flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 text-luxury-bg" />
            
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gold pointer-events-none"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-[50] w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px] h-[calc(100vh-8rem)] sm:h-[600px] max-h-[calc(100vh-8rem)] sm:max-h-[600px] glass-panel border border-gold/20 shadow-g1-glow rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-luxury-panel to-luxury-surface border-b border-gold/20 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image
                    src="/g1-logo.png"
                    alt="G1 Creative AI Assistant"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-luxury-text text-sm sm:text-base">Lewis — AI Assistant</h3>
                  <p className="text-xs text-luxury-muted">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-luxury-muted hover:text-gold transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-luxury-bg/50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gold/30 mr-2 flex-shrink-0">
                      <Image
                        src="/g1-logo.png"
                        alt="AI"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 ${
                      message.role === "user"
                        ? "bg-gold text-luxury-bg"
                        : "bg-luxury-surface border border-gold/10 text-luxury-text"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gold/30 mr-2">
                    <Image
                      src="/g1-logo.png"
                      alt="AI"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="bg-luxury-surface border border-gold/10 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-1">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0,
                        }}
                        className="text-gold text-lg"
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                        className="text-gold text-lg"
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                        className="text-gold text-lg"
                      >
                        .
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gold/20 p-3 sm:p-4 bg-luxury-surface">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-luxury-bg border border-gold/20 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-luxury-text placeholder:text-luxury-muted focus:outline-none focus:border-gold/40 transition-colors disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-gold text-luxury-bg rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

