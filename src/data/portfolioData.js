export const portfolioData = {
  personal: {
    name: "Girindra Mohan",
    role: "Cloud / IoT Engineer & Team Lead",
    tagline: "8+ Years Engineering Resilient Cloud, IoT & Enterprise Infrastructure",
    email: "iamgirindra@gmail.com",
    phone: "+91 9595066233",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/girindrag",
    github: "https://github.com/girindrag",
    twitter: "https://twitter.com/girindrag",
    avatar: "https://avatars.githubusercontent.com/u/16224892?v=4",
    bio: "Experienced and innovative Team Lead with 8+ years of comprehensive expertise in system administration, Docker, Linux, Ansible, and automation. Proven success in managing enterprise servers, troubleshooting complex systems, and optimizing operating systems for enhanced performance. Skilled in supporting IoT devices, scripting with Ansible, and utilizing Azure IoT services. Adept at streamlining processes through CI/CD pipelines, Kubernetes expertise, and containerization.",
  },
  
  stats: [
    { label: "Experience", value: "8+ Years" },
    { label: "Enterprise Servers Managed", value: "400+" },
    { label: "Infrastructure Scaling", value: "10x Growth" },
    { label: "Uptime Commitment", value: "99.99%" },
  ],

  experience: [
    {
      company: "Connected Services Corporation Wipro India Private Limited (formerly Harman Connected Services Corporation India Pvt. Ltd.)",
      role: "Team Lead",
      period: "01/2023 – Present",
      location: "Pune, India",
      badge: "Current",
      highlights: [
        "Architect and handle daily operations with Docker, Linux, and Ansible to configure and provision IoT devices for new setups.",
        "Troubleshoot complex enterprise microservices and applications, maintaining swift MTTR to minimize downtime.",
        "Install, harden, and fine-tune Debian 11 operating systems tailored for high-density Docker containers.",
        "Implement automated deployment scripts and CI/CD pipelines, continuously monitoring system telemetry to preempt potential issues.",
        "Lead technical reviews and mentor team engineers to align infrastructure with business goals.",
      ],
      technologies: ["Docker", "Linux (Debian 11)", "Ansible", "IoT Architecture", "CI/CD", "Shell Scripting", "Monitoring"]
    },
    {
      company: "DXC Technology",
      role: "System Administration",
      period: "08/2021 – 01/2023",
      location: "Navi Mumbai, India",
      badge: "Enterprise",
      highlights: [
        "Provided 24/7 mission-critical offshore infrastructure support for the State Bank of India Data Center (SBI-ITFO).",
        "Managed 400+ physical and virtual servers on high-end HP Blade Servers (BL860/870/890) and Superdome architecture.",
        "Assisted in scaling infrastructure platforms to accommodate a 10x customer surge with zero degradation.",
        "Administered and fine-tuned HP-UX and Red Hat Enterprise Linux (RHEL) systems.",
        "Authored resilient automation scripts using Ansible, Python, and Bash; created and modified ASM disk groups.",
      ],
      technologies: ["RHEL", "HP-UX", "Ansible", "Python", "Bash", "HP Blade", "Superdome", "ASM Disks", "Git"]
    }
  ],

  skills: {
    "Cloud & IoT": [
      { name: "Azure IoT Hub & Services", level: 90 },
      { name: "IoT Device Provisioning", level: 92 },
      { name: "Edge Camera Streaming & APIs", level: 88 },
      { name: "Cloud Architecture (Azure)", level: 85 },
      { name: "Telemetry & Sensor Integration", level: 85 },
    ],
    "DevOps & Containers": [
      { name: "Docker & Containerization", level: 95 },
      { name: "Kubernetes (K8s)", level: 85 },
      { name: "Ansible Automation", level: 92 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Terraform Infrastructure as Code", level: 82 },
      { name: "Git Version Control", level: 90 },
    ],
    "Systems & OS": [
      { name: "Linux Administration (Debian, RHEL, Ubuntu)", level: 96 },
      { name: "HP-UX & Unix Environments", level: 85 },
      { name: "Server Hardening & Security", level: 90 },
      { name: "HP Blade Servers & Superdome", level: 88 },
      { name: "ASM Disk Management", level: 84 },
    ],
    "Scripting & Tools": [
      { name: "Shell / Bash Scripting", level: 95 },
      { name: "Python Automation", level: 85 },
      { name: "System Monitoring & Alerts", level: 90 },
      { name: "Performance Optimization & Tuning", level: 92 },
      { name: "Production Troubleshooting", level: 95 },
    ]
  },

  projects: [
    {
      id: "iot-fleet-manager",
      title: "Edge IoT Fleet Automation",
      category: "IoT / DevOps",
      description: "Automated provisioning and orchestration engine for distributed edge IoT and camera nodes running hardened Debian 11 containers.",
      highlights: [
        "Zero-touch automated onboarding via Ansible playbooks",
        "Real-time health telemetry and self-healing container restarts",
        "Integrated camera feeds and hardware API integration"
      ],
      tags: ["Docker", "Debian 11", "Ansible", "Azure IoT", "Bash"],
      stars: 42,
    },
    {
      id: "sbi-datacenter-automation",
      title: "SBI Enterprise Data Center Infrastructure",
      category: "Infrastructure",
      description: "High-availability management system for 400+ physical and virtual enterprise nodes for State Bank of India (SBI-ITFO).",
      highlights: [
        "Automated HP Blade & Superdome operational maintenance",
        "ASM disk group configuration and dynamic storage reallocation",
        "10x scaling capacity support with 99.99% uptime delivery"
      ],
      tags: ["HP-UX", "RHEL", "Superdome", "Python", "Ansible"],
      stars: 56,
    },
    {
      id: "azure-cloud-telemetry",
      title: "Azure IoT Stream Telemetry Pipeline",
      category: "Cloud",
      description: "Scalable cloud pipeline connecting edge device sensors and cameras to Azure IoT Hub with automated CI/CD workflows.",
      highlights: [
        "Kubernetes container deployment with declarative manifests",
        "Automated build, test, and container registry publishing",
        "Security-first device certificates and identity verification"
      ],
      tags: ["Azure IoT", "Kubernetes", "CI/CD", "Docker", "Python"],
      stars: 38,
    },
    {
      id: "terraform-iac-blueprints",
      title: "Production Infrastructure as Code Modules",
      category: "DevOps",
      description: "Modular Terraform scripts for provisioning resilient cloud virtual networks, storage accounts, and compute clusters.",
      highlights: [
        "Immutable infrastructure with automated policy enforcement",
        "Reusable modules for rapid multi-environment deployments",
        "Cost optimization and resource tagging best practices"
      ],
      tags: ["Terraform", "Azure", "Linux", "GitOps"],
      stars: 29,
    }
  ],

  education: [
    {
      degree: "B.E. in Information Technology",
      institution: "Indira College of Engineering and Computer Management",
      location: "Pune, India",
      year: "2016",
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      code: "AZ-104",
      status: "Certified",
    }
  ]
};
