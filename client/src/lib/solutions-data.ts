export interface Solution {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  features: string[];
  specs: Record<string, string>;
  category: string;
}

export const solutions: Solution[] = [
  {
    id: 'l1-firewall',
    title: 'L1 Firewall Protection',
    description: 'Enterprise-grade network security solution providing comprehensive protection against cyber threats with real-time monitoring and automated response capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'shield-alt',
    category: 'Security',
    features: [
      'Real-time threat detection and prevention',
      'Advanced intrusion detection system (IDS)',
      'Automated security policy enforcement',
      'Comprehensive logging and reporting',
      '24/7 security operations center support'
    ],
    specs: {
      'Throughput': 'Up to 10 Gbps',
      'Concurrent Sessions': '2 Million+',
      'VPN Support': 'IPSec, SSL/TLS',
      'High Availability': '99.99% uptime SLA'
    }
  },
  {
    id: 'l2-firewall',
    title: 'L2 Advanced Firewall',
    description: 'Next-generation firewall with deep packet inspection, application control, and integrated threat intelligence for comprehensive network security.',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'lock',
    category: 'Security',
    features: [
      'Deep packet inspection (DPI)',
      'Application-level security controls',
      'Integrated threat intelligence feeds',
      'Advanced malware protection',
      'Centralized security management'
    ],
    specs: {
      'Throughput': 'Up to 40 Gbps',
      'Applications Identified': '3000+',
      'Security Services': 'IPS, Anti-malware, URL filtering',
      'Management': 'Centralized dashboard'
    }
  },
  {
    id: 'l3-firewall',
    title: 'L3 Enterprise Firewall',
    description: 'Complete network infrastructure protection with AI-powered threat intelligence, automated incident response, and enterprise-scale performance.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'server',
    category: 'Security',
    features: [
      'AI-powered threat detection',
      'Automated incident response',
      'Advanced persistent threat (APT) protection',
      'Zero-day exploit prevention',
      'Enterprise-scale performance'
    ],
    specs: {
      'Throughput': 'Up to 100 Gbps',
      'AI Engine': 'Machine learning threat detection',
      'Response Time': 'Sub-millisecond',
      'Scalability': 'Enterprise-wide deployment'
    }
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure solutions with hybrid deployment options, enterprise security, and optimized performance for modern business needs.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'cloud',
    category: 'Infrastructure',
    features: [
      'Multi-cloud deployment strategies',
      'Hybrid cloud integration',
      'Auto-scaling capabilities',
      'Enterprise-grade security',
      'Cost optimization tools'
    ],
    specs: {
      'Deployment': 'AWS, Azure, Google Cloud',
      'Scaling': 'Automatic resource allocation',
      'Security': 'End-to-end encryption',
      'Monitoring': '24/7 cloud operations'
    }
  },
  {
    id: 'networking',
    title: 'Network Infrastructure',
    description: 'High-performance networking solutions with redundancy, load balancing, and optimized data flow management for enterprise environments.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'network-wired',
    category: 'Infrastructure',
    features: [
      'High-speed data transmission',
      'Network redundancy and failover',
      'Load balancing and optimization',
      'Software-defined networking (SDN)',
      'Network monitoring and analytics'
    ],
    specs: {
      'Speed': 'Up to 400 Gbps',
      'Redundancy': 'Multiple failover paths',
      'Latency': 'Ultra-low latency design',
      'Management': 'Centralized network control'
    }
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting services to guide digital transformation initiatives and optimize IT infrastructure for business growth.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'users-cog',
    category: 'Consulting',
    features: [
      'Digital transformation strategy',
      'IT infrastructure assessment',
      'Technology roadmap development',
      'Change management support',
      'Performance optimization'
    ],
    specs: {
      'Expertise': '20+ years industry experience',
      'Certifications': 'CISSP, CISA, PMP',
      'Methodology': 'Agile and DevOps practices',
      'Support': 'Ongoing strategic guidance'
    }
  }
];

export const getSolutionById = (id: string): Solution | undefined => {
  return solutions.find(solution => solution.id === id);
};
