"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Download, Eye, BrainCircuit, Rewind, Focus, Sparkles, ArrowRight, Camera, Shield } from "lucide-react"
export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // تبديل الميزة النشطة كل 4 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // التحقق من حجم الشاشة
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // التحقق عند التحميل
    checkMobile()

    // التحقق عند تغيير حجم الشاشة
    window.addEventListener("resize", checkMobile)

    // تنظيف المستمع عند إزالة المكون
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const features = [
    {
      id: 0,
      icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
      title: "كشف التشتت لحظيًا",
      description: "تحليل ذكي لحركة العين والوجه لاكتشاف لحظات فقدان التركيز فوراً",
    },
    {
      id: 1,
      icon: <Focus className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
      title: "إيقاف تلقائي مع تنبيه لطيف",
      description: "إيقاف الفيديو بشكل مؤقت مع تذكير بسيط وودي لاستعادة التركيز",
    },
    {
      id: 2,
      icon: <Rewind className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
      title: "إعادة تشغيل ذكية",
      description: "إرجاع الفيديو 15 ثانية تلقائياً لضمان عدم فقدان أي محتوى مهم",
    },
  ]

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* الهيدر */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Sharood
            </span>
            <span className="text-xl sm:text-2xl">✨</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 h-9 sm:h-10 px-3 sm:px-4 py-2 text-white">
              <Download className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">تثبيت الإضافة</span>
            </button>
          </motion.div>
        </div>
      </header>

      {/* قسم الترحيب الرئيسي */}
      <section className="container mx-auto px-4 py-10 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2"
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>تقنية الذكاء الاصطناعي</span>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                  Sharood Mode
                </span>{" "}
                🚀
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl">لتركيز أعمق وتعلم أفضل</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
                أداة ذكية تعتمد على الذكاء الاصطناعي لرصد التشتت البصري أثناء مشاهدة الفيديوهات التعليمية وتحويل لحظات
                التشتت إلى فرص للتركيز ✨
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 h-10 px-3 sm:px-4 py-2 text-white text-xs sm:text-sm">
                <Download className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                تثبيت مجاناً
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-10 px-3 sm:px-4 py-2 text-gray-900 hover:border-gray-400 text-xs sm:text-sm">
                عرض العرض التوضيحي 👀
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              <span>نحترم خصوصيتك - لا يتم تخزين أي بيانات من الكاميرا</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
                  {/* محاكاة لواجهة مشغل فيديو */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <img src="/img2.jpg" alt="Image" />


                      {/* تراكب لإظهار وظيفة الكشف عن التشتت */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 1, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 4,
                            times: [0, 0.1, 0.9, 1],
                          }}
                          className="bg-white/20 backdrop-blur-sm p-4 rounded-lg"
                        >
                          <div className="text-white text-center">
                            <div className="flex items-center justify-center mb-2">
                              <Eye className="h-6 w-6 text-purple-300" />
                            </div>
                            <p className="text-sm font-medium">تم اكتشاف تشتت الانتباه</p>
                            <p className="text-xs mt-1">جاري إيقاف الفيديو مؤقتًا...</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* شريط التقدم */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "70%" }}
                          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* أيقونات متحركة */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-full p-2 sm:p-3 shadow-lg"
            >
              <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-full p-2 sm:p-3 shadow-lg"
            >
              <BrainCircuit className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* قسم كيف يعمل */}
      <section className="container mx-auto px-4 py-10 sm:py-16 bg-white rounded-3xl shadow-sm">
        <div className="text-center mb-8 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
          >
            ✨ كيف يعمل Sharood Mode؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            تقنية متطورة تساعدك على البقاء متركزًا أثناء التعلم
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[
            {
              icon: <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
              title: "1. اكتشاف التشتت",
              description: "تكتشف الأداة عند انصراف نظر الطالب عن الشاشة باستخدام تقنيات الذكاء الاصطناعي المتقدمة",
            },
            {
              icon: <Focus className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
              title: "2. إيقاف وتذكير",
              description: "توقف الفيديو مؤقتًا بلطف وتُظهر تذكيرًا بسيطًا للمساعدة على استعادة التركيز",
            },
            {
              icon: <Rewind className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
              title: "3. إعادة وتشغيل",
              description: "تُعيد الفيديو 15 ثانية، وتتابع التشغيل بعد عودة التركيز لضمان فهم المحتوى",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-2 hover:border-purple-300 transition-all duration-300 p-6 text-center space-y-4">
                <div className="mx-auto bg-purple-50 p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>

              {/* سهم للربط بين الخطوات (لا يظهر بعد آخر عنصر) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-purple-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* قسم التقنيات المستخدمة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-purple-50 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">⚙️ التقنيات المستخدمة</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="font-semibold mb-2">A</div>
              <p className="text-sm text-gray-600">A</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="font-semibold mb-2">A A</div>
              <p className="text-sm text-gray-600">A</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="font-semibold mb-2">A</div>
              <p className="text-sm text-gray-600">A</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* قسم لماذا Sharood Mode مميز */}
      <section className="container mx-auto px-4 py-10 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">🧲 ليش Sharood Mode مميز؟</h2>
              <p className="text-base sm:text-lg text-gray-600">
                تحوّل اللحظات التي يغيب فيها الطالب ذهنيًا إلى فرص لإعادة التركيز دون تأنيب، مما يساعد على بناء عادات
                تركيز قوية وتحقيق تعلم أعمق وأكثر كفاءة.
              </p>

              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-bold">⭐ أهم 3 مميزات:</h3>

                <div className="space-y-3">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        activeFeature === feature.id
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            activeFeature === feature.id ? "bg-purple-100" : "bg-gray-100"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg">{feature.title}</h4>
                          <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden p-6">
                  <div className="relative aspect-square bg-purple-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl" />
                    </motion.div>

                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 5,
                          ease: "easeInOut",
                        }}
                      >
                        <BrainCircuit className="h-16 w-16 sm:h-20 sm:w-20 text-purple-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-2">
                        تعلم أكثر فعالية
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
                        زيادة التركيز بنسبة تصل إلى 40% وتحسين استيعاب المعلومات
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* زخارف */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-300 rounded-full opacity-50 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-300 rounded-full opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم التحميل */}
      <section className="container mx-auto px-4 py-10 sm:py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-6 sm:p-10 md:p-16 text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">جاهز لتجربة تعليمية أفضل؟ 🚀</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            انضم إلى الآلاف من الطلاب الذين يستخدمون Sharood Mode لتحسين تركيزهم وتحقيق نتائج أفضل في دراستهم
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-purple-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-2 h-10 sm:h-12">
              <Download className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              تثبيت Sharood Mode مجاناً
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* الفوتر */}
      <footer className="bg-gray-50 py-8 sm:py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            © {new Date().getFullYear()} Sharood Mode - جميع الحقوق محفوظة
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-8 px-3 sm:px-4 py-2 text-gray-900 hover:border-gray-400">
              الشروط والأحكام
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-8 px-3 sm:px-4 py-2 text-gray-900 hover:border-gray-400">
              سياسة الخصوصية
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-8 px-3 sm:px-4 py-2 text-gray-900 hover:border-gray-400">
              تواصل معنا
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
