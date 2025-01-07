export interface Tool {
  name: string;
  category: string;
  description: string;
  installation: string;
  usage: string[];
  commands: Command[];
}

interface Command {
  command: string;
  description: string;
  example?: string;
}

export const kaliTools: Tool[] = [
  {
    name: "Nmap",
    category: "Information Gathering",
    description: "Nmap ('Network Mapper') is a free and open source utility for network discovery and security auditing. It uses raw IP packets in novel ways to determine what hosts are available on the network, what services those hosts are offering, what operating systems they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics.",
    installation: "sudo pacman -S nmap",
    usage: [
      "Network exploration and host discovery",
      "Port scanning and service detection",
      "OS detection and version detection",
      "Vulnerability and backdoor detection",
      "Network mapping and inventory",
      "Firewall and packet filter evasion",
      "DNS enumeration",
      "Host identification and banner grabbing",
      "Discover devices on a network with specific protocols (e.g., HTTP, FTP, SSH, etc.)",
      "Perform stealthy scans to avoid detection by firewalls and intrusion detection systems (IDS)",
      "Detect open ports on remote hosts and perform security assessments"
    ],
    commands: [
      {
        command: "nmap -sS [target]",
        description: "Perform a TCP SYN scan (stealthy scan)",
        example: "nmap -sS 192.168.1.0/24"
      },
      {
        command: "nmap -sV -sC [target]",
        description: "Detect service versions and run default scripts",
        example: "nmap -sV -sC example.com"
      },
      {
        command: "nmap -p- [target]",
        description: "Scan all 65535 ports",
        example: "nmap -p- 10.0.0.1"
      },
      {
        command: "nmap -A [target]",
        description: "Aggressive scan (OS detection, version detection, script scanning, and traceroute)",
        example: "nmap -A 192.168.1.1"
      },
      {
        command: "nmap -sn [target]",
        description: "Perform a simple ping scan to identify active hosts without scanning ports",
        example: "nmap -sn 192.168.1.0/24"
      },
      {
        command: "nmap -O [target]",
        description: "Detect the operating system of the target",
        example: "nmap -O 192.168.1.1"
      },
      {
        command: "nmap -p [ports] [target]",
        description: "Scan specific ports (comma-separated)",
        example: "nmap -p 80,443 192.168.1.1"
      },
      {
        command: "nmap --script [script] [target]",
        description: "Run a specific NSE (Nmap Scripting Engine) script for additional testing",
        example: "nmap --script http-vuln-cve2006-3392 192.168.1.1"
      },
      {
        command: "nmap -T4 [target]",
        description: "Set timing template (T4 is aggressive, speeds up the scan)",
        example: "nmap -T4 192.168.1.1"
      },
      {
        command: "nmap -6 [target]",
        description: "Scan an IPv6 address",
        example: "nmap -6 2001:0db8::ff00:0042:8329"
      },
      {
        command: "nmap --traceroute [target]",
        description: "Perform a traceroute to the target to determine the network path",
        example: "nmap --traceroute 192.168.1.1"
      },
      {
        command: "nmap -iL [input_file]",
        description: "Scan hosts from a list in a file",
        example: "nmap -iL targets.txt"
      }
    ]
  },  
  {
    name: "Metasploit",
    category: "Exploitation Tools",
    description: "The Metasploit Framework is a powerful penetration testing and exploitation framework that provides a complete environment for penetration testing and exploit development. It contains a suite of tools that can be used to test security vulnerabilities, enumerate networks, execute attacks, and evade detection.",
    installation: "sudo pacman -S metasploit",
    usage: [
      "Vulnerability research and testing",
      "Exploit development and deployment",
      "Payload generation and delivery",
      "Post-exploitation activities",
      "Security assessment automation"
    ],
    commands: [
      {
        command: "msfconsole",
        description: "Start the Metasploit Framework console",
        example: "msfconsole"
      },
      {
        command: "search [term]",
        description: "Search for modules, exploits, or payloads",
        example: "search type:exploit platform:windows"
      },
      {
        command: "use [module]",
        description: "Select a module to use",
        example: "use exploit/windows/smb/ms17_010_eternalblue"
      },
      {
        command: "show options",
        description: "Display module options",
        example: "show options"
      },
      {
        command: "set PAYLOAD [payload]",
        description: "Set the payload for the exploit",
        example: "set PAYLOAD windows/meterpreter/reverse_tcp"
      }
    ]
  },
  {
    name: "Burp Suite",
    category: "Web Application Analysis",
    description: "Burp Suite is an integrated platform for performing security testing of web applications. It contains various tools that work together seamlessly to support the entire testing process, from initial mapping and analysis of an application's attack surface, through to finding and exploiting security vulnerabilities.",
    installation: "sudo pacman -S burpsuite",
    usage: [
      "Web application security testing",
      "Vulnerability scanning",
      "Traffic interception and modification",
      "Automated crawling and scanning",
      "Custom extension development"
    ],
    commands: [
      {
        command: "burpsuite",
        description: "Launch Burp Suite GUI",
        example: "burpsuite"
      },
      {
        command: "java -jar burpsuite_pro.jar",
        description: "Launch Burp Suite Professional",
        example: "java -jar burpsuite_pro.jar"
      }
    ]
  },
  {
    name: "Aircrack-ng",
    category: "Wireless Attacks",
    description: "Aircrack-ng is a complete suite of tools to assess WiFi network security. It focuses on different areas of WiFi security: monitoring, attacking, testing, and cracking. The suite includes packet capture and export of data to text files for further processing by third party tools.",
    installation: "sudo pacman -S aircrack-ng",
    usage: [
      "WEP and WPA-PSK key cracking",
      "Wireless network monitoring",
      "Packet capture and injection",
      "Network detection and reconnaissance",
      "WiFi card testing capabilities"
    ],
    commands: [
      {
        command: "airmon-ng start [interface]",
        description: "Start monitor mode on wireless interface",
        example: "airmon-ng start wlan0"
      },
      {
        command: "airodump-ng [interface]",
        description: "Capture packets and show nearby wireless networks",
        example: "airodump-ng wlan0mon"
      },
      {
        command: "aireplay-ng -0 [count] -a [BSSID] [interface]",
        description: "Perform deauthentication attack",
        example: "aireplay-ng -0 10 -a 00:11:22:33:44:55 wlan0mon"
      },
      {
        command: "aircrack-ng [capture file]",
        description: "Crack WEP/WPA keys from capture file",
        example: "aircrack-ng capture-01.cap"
      }
    ]
  },
  {
    name: "John the Ripper",
    category: "Password Attacks",
    description: "John the Ripper is a fast password cracker, currently available for many flavors of Unix, Windows, and other operating systems. Its primary purpose is to detect weak Unix passwords, but it supports hundreds of hash and cipher types.",
    installation: "sudo pacman -S john",
    usage: [
      "Password hash cracking",
      "Dictionary attacks",
      "Brute force attacks",
      "Custom rule-based attacks",
      "Password auditing"
    ],
    commands: [
      {
        command: "john [password file]",
        description: "Crack passwords using default mode",
        example: "john passwords.txt"
      },
      {
        command: "john --wordlist=[wordlist] [password file]",
        description: "Perform dictionary attack using specified wordlist",
        example: "john --wordlist=rockyou.txt hashes.txt"
      },
      {
        command: "john --show [password file]",
        description: "Show cracked passwords",
        example: "john --show cracked.txt"
      }
    ]
  },
  {
    name: "Wireshark",
    category: "Sniffing & Spoofing",
    description: "Wireshark is the world's foremost and widely-used network protocol analyzer. It lets you see what's happening on your network at a microscopic level and is the de facto standard across many commercial and non-profit enterprises, government agencies, and educational institutions.",
    installation: "sudo pacman -S wireshark-qt",
    usage: [
      "Real-time packet capture and analysis",
      "Deep packet inspection",
      "Protocol dissection and analysis",
      "Network troubleshooting",
      "Security analysis and verification"
    ],
    commands: [
      {
        command: "wireshark",
        description: "Launch Wireshark GUI",
        example: "wireshark"
      },
      {
        command: "tshark -i [interface]",
        description: "Capture packets on specific interface using CLI",
        example: "tshark -i eth0"
      },
      {
        command: "tshark -r [file]",
        description: "Read and analyze capture file",
        example: "tshark -r capture.pcap"
      },
      {
        command: "tshark -i [interface] -f [filter]",
        description: "Capture with filter",
        example: "tshark -i eth0 -f 'port 80'"
      }
    ]
  },
  {
    name: "Hydra",
    category: "Password Attacks",
    description: "Hydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add. This tool makes it possible to show the institution of a system administrator the weak points of the system.",
    installation: "sudo pacman -S hydra",
    usage: [
      "Online password cracking",
      "Brute force attacks against login services",
      "Dictionary attacks on multiple protocols",
      "Password spraying attacks",
      "Service authentication testing"
    ],
    commands: [
      {
        command: "hydra -l [user] -P [wordlist] [protocol://target]",
        description: "Basic password attack against a service",
        example: "hydra -l admin -P passwords.txt ssh://192.168.1.1"
      },
      {
        command: "hydra -L [users file] -P [passwords file] [service] [target]",
        description: "Attack using lists of users and passwords",
        example: "hydra -L users.txt -P pass.txt ftp://10.0.0.1"
      },
      {
        command: "hydra -l [user] -p [password] [target] [service] -V",
        description: "Verbose attack with single user/password",
        example: "hydra -l root -p toor 192.168.1.1 ssh -V"
      }
    ]
  },
  {
    name: "SQLmap",
    category: "Web Application Analysis",
    description: "SQLmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over database servers. It comes with a powerful detection engine, many niche features, and a broad range of switches including database fingerprinting, data fetching from the database, and accessing the underlying file system.",
    installation: "sudo pacman -S sqlmap",
    usage: [
      "Automated SQL injection detection",
      "Database server fingerprinting",
      "Data extraction from databases",
      "File system access on database server",
      "Command execution on database server"
    ],
    commands: [
      {
        command: "sqlmap -u [URL]",
        description: "Basic SQL injection test on URL",
        example: "sqlmap -u \"http://example.com/page.php?id=1\""
      },
      {
        command: "sqlmap -u [URL] --dbs",
        description: "Enumerate databases",
        example: "sqlmap -u \"http://example.com/page.php?id=1\" --dbs"
      },
      {
        command: "sqlmap -u [URL] -D [database] --tables",
        description: "List tables in specific database",
        example: "sqlmap -u \"http://example.com/page.php?id=1\" -D testdb --tables"
      },
      {
        command: "sqlmap -u [URL] --batch --random-agent",
        description: "Automated scan with random User-Agent",
        example: "sqlmap -u \"http://example.com/page.php?id=1\" --batch --random-agent"
      }
    ]
  }
];