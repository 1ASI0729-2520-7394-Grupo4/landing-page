// i18n Configuration and Translations
const translations = {
  es: {
    // Navbar
    'navbar.home': 'Inicio',
    'navbar.features': 'Características',
    'navbar.about': 'Acerca de',
    'navbar.pricing': 'Precios',
    'navbar.contact': 'Contacto',
    'navbar.client': 'Cliente',
    'navbar.provider': 'Proveedor',

    // Hero
    'hero.title': 'Gestión Inteligente de Combustible',
    'hero.subtitle': 'Tu plataforma para una gestión eficiente de pedidos de combustible. Optimiza tus operaciones y mejora la productividad de tu flota.',
    'hero.cta': 'Conoce Más',
    'hero.demo': 'Ver Demo',

    // Stats
    'stats.clients': 'Clientes Activos',
    'stats.orders': 'Pedidos Procesados',
    'stats.efficiency': 'Aumento de Eficiencia',
    'stats.support': 'Soporte',

    // About
    'about.title': 'Transformando la Industria del Combustible',
    'about.subtitle': 'Descubre cómo FuelTrack está revolucionando la gestión de combustible con tecnología de vanguardia',
    'about.videoTitle': 'Ver FuelTrack en Acción',
    'about.videoDesc': 'Descubre cómo funciona nuestra plataforma',
    'about.accuracy': 'Precisión',
    'about.accuracyDesc': 'En la gestión de inventarios y entregas',
    'about.reduction': 'Reducción de Costos',
    'about.reductionDesc': 'En costos operativos promedio',
    'about.monitoring': 'Monitoreo',
    'about.monitoringDesc': 'Seguimiento continuo de operaciones',
    'about.clients': 'Clientes',
    'about.clientsDesc': 'Confían en nuestra plataforma',

    // Process
    'process.title': 'Cómo Funciona',
    'process.subtitle': 'Proceso simple y eficiente en 4 pasos',
    'process.step1.title': 'Regístrate',
    'process.step1.desc': 'Crea tu cuenta y configura tu perfil',
    'process.step2.title': 'Solicita',
    'process.step2.desc': 'Realiza tu pedido de combustible con todos los detalles',
    'process.step3.title': 'Rastrea',
    'process.step3.desc': 'Monitorea tu pedido en tiempo real',
    'process.step4.title': 'Recibe',
    'process.step4.desc': 'Obtén tu combustible entregado a tiempo',

    // Benefits
    'benefits.title': '¿Por Qué Elegir FuelTrack?',
    'benefits.subtitle': 'Descubre las ventajas que nos hacen líderes en la industria',
    'benefits.efficiency.title': 'Máxima Eficiencia',
    'benefits.efficiency.desc': 'Optimiza tus operaciones con nuestro sistema de gestión inteligente',
    'benefits.security.title': 'Seguridad Total',
    'benefits.security.desc': 'Tus datos y transacciones están protegidos con los más altos estándares de seguridad',
    'benefits.support.title': 'Soporte 24/7',
    'benefits.support.desc': 'Nuestro equipo de expertos está siempre disponible para ayudarte',
    'benefits.integration.title': 'Fácil Integración',
    'benefits.integration.desc': 'Integra sin problemas con tus sistemas existentes',

    // Features
    'features.title': 'Características Principales',
    'features.client': 'Cliente',
    'features.provider': 'Proveedor',
    'features.clientFeatures.orders.title': 'Registro de Pedidos',
    'features.clientFeatures.orders.desc': 'Sistema intuitivo para crear y gestionar pedidos de combustible de manera eficiente.',
    'features.clientFeatures.orders.badge': 'Más usado',
    'features.clientFeatures.documents.title': 'Carga de Comprobantes',
    'features.clientFeatures.documents.desc': 'Sube y organiza todos tus documentos de compra de forma segura y accesible.',
    'features.clientFeatures.tracking.title': 'Seguimiento en Tiempo Real',
    'features.clientFeatures.tracking.desc': 'Monitorea el estado de tus pedidos desde la solicitud hasta la entrega.',
    'features.clientFeatures.reports.title': 'Confirmación y Reportes',
    'features.clientFeatures.reports.desc': 'Genera reportes detallados y confirmaciones automáticas de todas las transacciones.',
    'features.clientFeatures.reports.badge': 'Nuevo',
    'features.providerFeatures.approval.title': 'Aprobación de Pedidos',
    'features.providerFeatures.approval.desc': 'Revisa y gestiona las solicitudes de combustible de tus clientes de manera eficiente.',
    'features.providerFeatures.transport.title': 'Asignación de Transporte',
    'features.providerFeatures.transport.desc': 'Coordina conductores y vehículos para optimizar las entregas.',
    'features.providerFeatures.sales.title': 'Reportes de Venta',
    'features.providerFeatures.sales.desc': 'Accede a métricas detalladas y cierres de venta automatizados.',
    'features.providerFeatures.reschedule.title': 'Reprogramaciones',
    'features.providerFeatures.reschedule.desc': 'Gestiona cambios de horarios y coordina nuevas entregas sin complicaciones.',
    'features.providerFeatures.reschedule.badge': 'Nuevo',

    // Testimonials
    'testimonials.title': 'Lo que Dicen Nuestros Clientes',
    'testimonials.client1.name': 'Juan Pérez',
    'testimonials.client1.role': 'Director de Operaciones, TransCorp',
    'testimonials.client1.quote': 'FuelTrack ha revolucionado nuestra gestión de combustible. La eficiencia mejoró un 40% desde su implementación.',
    'testimonials.client2.name': 'María García',
    'testimonials.client2.role': 'Gerente de Logística, FleetMax',
    'testimonials.client2.quote': 'La plataforma es intuitiva y nos permite ahorrar tiempo valioso en la coordinación de entregas.',
    'testimonials.client3.name': 'Carlos López',
    'testimonials.client3.role': 'CEO, EnergyFlow',
    'testimonials.client3.quote': 'El seguimiento en tiempo real nos da la tranquilidad que necesitamos para nuestras operaciones críticas.',

    // Pricing
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Elige el plan que mejor se adapte a tus necesidades',
    'pricing.basic.title': 'Básico',
    'pricing.basic.period': '/mes',
    'pricing.basic.feature1': 'Hasta 50 pedidos/mes',
    'pricing.basic.feature2': 'Seguimiento básico',
    'pricing.basic.feature3': 'Soporte por email',
    'pricing.basic.cta': 'Comenzar Prueba',
    'pricing.pro.title': 'Pro',
    'pricing.pro.period': '/mes',
    'pricing.pro.feature1': 'Pedidos ilimitados',
    'pricing.pro.feature2': 'Seguimiento avanzado',
    'pricing.pro.feature3': 'Soporte prioritario',
    'pricing.pro.cta': 'Empezar Ahora',
    'pricing.pro.badge': 'Más Popular',
    'pricing.enterprise.title': 'Empresarial',
    'pricing.enterprise.period': '/mes',
    'pricing.enterprise.feature1': 'Todo incluido',
    'pricing.enterprise.feature2': 'API personalizada',
    'pricing.enterprise.feature3': 'Soporte dedicado',
    'pricing.enterprise.cta': 'Contactar Ventas',

    // Contact
    'contact.title': '¿Listo para Comenzar?',
    'contact.subtitle': 'Contáctanos y descubre cómo FuelTrack puede transformar tu gestión de combustible',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',

    // Footer
    'footer.description': 'Transformando la gestión de combustible con tecnología de vanguardia',
    'footer.links.title': 'Enlaces',
    'footer.links.home': 'Inicio',
    'footer.links.features': 'Características',
    'footer.links.about': 'Acerca de',
    'footer.links.pricing': 'Precios',
    'footer.links.contact': 'Contacto',
    'footer.copyright': '© 2024 FuelTrack. Todos los derechos reservados.'
  },

  en: {
    // Navbar
    'navbar.home': 'Home',
    'navbar.features': 'Features',
    'navbar.about': 'About',
    'navbar.pricing': 'Pricing',
    'navbar.contact': 'Contact',
    'navbar.client': 'Client',
    'navbar.provider': 'Provider',

    // Hero
    'hero.title': 'Intelligent Fuel Management',
    'hero.subtitle': 'Your platform for efficient fuel order management. Optimize your operations and improve your fleet productivity.',
    'hero.cta': 'Learn More',
    'hero.demo': 'View Demo',

    // Stats
    'stats.clients': 'Active Clients',
    'stats.orders': 'Orders Processed',
    'stats.efficiency': 'Efficiency Increase',
    'stats.support': 'Support',

    // About
    'about.title': 'Transforming the Fuel Industry',
    'about.subtitle': 'Discover how FuelTrack is revolutionizing fuel management with cutting-edge technology',
    'about.videoTitle': 'See FuelTrack in Action',
    'about.videoDesc': 'Discover how our platform works',
    'about.accuracy': 'Accuracy',
    'about.accuracyDesc': 'In inventory and delivery management',
    'about.reduction': 'Cost Reduction',
    'about.reductionDesc': 'In average operational costs',
    'about.monitoring': 'Monitoring',
    'about.monitoringDesc': 'Continuous operations tracking',
    'about.clients': 'Clients',
    'about.clientsDesc': 'Trust our platform',

    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'Simple and efficient process in 4 steps',
    'process.step1.title': 'Register',
    'process.step1.desc': 'Create your account and set up your profile',
    'process.step2.title': 'Request',
    'process.step2.desc': 'Place your fuel order with all details',
    'process.step3.title': 'Track',
    'process.step3.desc': 'Monitor your order in real-time',
    'process.step4.title': 'Receive',
    'process.step4.desc': 'Get your fuel delivered on time',

    // Benefits
    'benefits.title': 'Why Choose FuelTrack?',
    'benefits.subtitle': 'Discover the advantages that make us industry leaders',
    'benefits.efficiency.title': 'Maximum Efficiency',
    'benefits.efficiency.desc': 'Optimize your operations with our intelligent management system',
    'benefits.security.title': 'Total Security',
    'benefits.security.desc': 'Your data and transactions are protected with the highest security standards',
    'benefits.support.title': '24/7 Support',
    'benefits.support.desc': 'Our expert team is always available to help you',
    'benefits.integration.title': 'Easy Integration',
    'benefits.integration.desc': 'Seamlessly integrate with your existing systems',

    // Features
    'features.title': 'Main Features',
    'features.client': 'Client',
    'features.provider': 'Provider',
    'features.clientFeatures.orders.title': 'Order Registration',
    'features.clientFeatures.orders.desc': 'Intuitive system to create and manage fuel orders efficiently.',
    'features.clientFeatures.orders.badge': 'Most Used',
    'features.clientFeatures.documents.title': 'Document Upload',
    'features.clientFeatures.documents.desc': 'Upload and organize all your purchase documents securely and accessibly.',
    'features.clientFeatures.tracking.title': 'Real-time Tracking',
    'features.clientFeatures.tracking.desc': 'Monitor your order status from request to delivery.',
    'features.clientFeatures.reports.title': 'Confirmation and Reports',
    'features.clientFeatures.reports.desc': 'Generate detailed reports and automatic confirmations of all transactions.',
    'features.clientFeatures.reports.badge': 'New',
    'features.providerFeatures.approval.title': 'Order Approval',
    'features.providerFeatures.approval.desc': 'Review and manage your customers fuel requests efficiently.',
    'features.providerFeatures.transport.title': 'Transport Assignment',
    'features.providerFeatures.transport.desc': 'Coordinate drivers and vehicles to optimize deliveries.',
    'features.providerFeatures.sales.title': 'Sales Reports',
    'features.providerFeatures.sales.desc': 'Access detailed metrics and automated sales closures.',
    'features.providerFeatures.reschedule.title': 'Rescheduling',
    'features.providerFeatures.reschedule.desc': 'Manage schedule changes and coordinate new deliveries seamlessly.',
    'features.providerFeatures.reschedule.badge': 'New',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.client1.name': 'Juan Pérez',
    'testimonials.client1.role': 'Operations Director, TransCorp',
    'testimonials.client1.quote': 'FuelTrack has revolutionized our fuel management. Efficiency improved by 40% since implementation.',
    'testimonials.client2.name': 'María García',
    'testimonials.client2.role': 'Logistics Manager, FleetMax',
    'testimonials.client2.quote': 'The platform is intuitive and allows us to save valuable time in delivery coordination.',
    'testimonials.client3.name': 'Carlos López',
    'testimonials.client3.role': 'CEO, EnergyFlow',
    'testimonials.client3.quote': 'Real-time tracking gives us the peace of mind we need for our critical operations.',

    // Pricing
    'pricing.title': 'Plans and Pricing',
    'pricing.subtitle': 'Choose the plan that best fits your needs',
    'pricing.basic.title': 'Basic',
    'pricing.basic.period': '/month',
    'pricing.basic.feature1': 'Up to 50 orders/month',
    'pricing.basic.feature2': 'Basic tracking',
    'pricing.basic.feature3': 'Email support',
    'pricing.basic.cta': 'Start Trial',
    'pricing.pro.title': 'Pro',
    'pricing.pro.period': '/month',
    'pricing.pro.feature1': 'Unlimited orders',
    'pricing.pro.feature2': 'Advanced tracking',
    'pricing.pro.feature3': 'Priority support',
    'pricing.pro.cta': 'Get Started',
    'pricing.pro.badge': 'Most Popular',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.period': '/month',
    'pricing.enterprise.feature1': 'Everything included',
    'pricing.enterprise.feature2': 'Custom API',
    'pricing.enterprise.feature3': 'Dedicated support',
    'pricing.enterprise.cta': 'Contact Sales',

    // Contact
    'contact.title': 'Ready to Get Started?',
    'contact.subtitle': 'Contact us and discover how FuelTrack can transform your fuel management',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // Footer
    'footer.description': 'Transforming fuel management with cutting-edge technology',
    'footer.links.title': 'Links',
    'footer.links.home': 'Home',
    'footer.links.features': 'Features',
    'footer.links.about': 'About',
    'footer.links.pricing': 'Pricing',
    'footer.links.contact': 'Contact',
    'footer.copyright': '© 2024 FuelTrack. All rights reserved.'
  }
};
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang]?.[key];
    if (translation) {
      el.textContent = translation;
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyTranslations(selectedLang);
  });
});

// Aplicar traducción por defecto al cargar (español)
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations('es');
});