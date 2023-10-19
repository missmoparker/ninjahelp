const fs = require('fs');

const jsonData = {
  "dataspecName": "nms-syslog",
  "datapoints": [
    //JSON DATA HERE
{
                "dataspecName": "nms-syslog",
                "datapoints": [
                    {
                        "monTime": 1697727789,
                        "datapointId": 1774956,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 10:03:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727780,
                        "datapointId": 1774955,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[1083]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 10:03:00 AM"
                        }
                    },
                    {
                        "monTime": 1697727780,
                        "datapointId": 1774954,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 10:03:00 AM"
                        }
                    },
                    {
                        "monTime": 1697727729,
                        "datapointId": 1774951,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 10:02:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727719,
                        "datapointId": 1774950,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[1035]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 10:01:59 AM"
                        }
                    },
                    {
                        "monTime": 1697727718,
                        "datapointId": 1774949,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 10:01:59 AM"
                        }
                    },
                    {
                        "monTime": 1697727669,
                        "datapointId": 1774948,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 10:01:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727657,
                        "datapointId": 1774947,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[942]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 10:00:57 AM"
                        }
                    },
                    {
                        "monTime": 1697727657,
                        "datapointId": 1774946,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 10:00:57 AM"
                        }
                    },
                    {
                        "monTime": 1697727609,
                        "datapointId": 1774943,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 10:00:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727596,
                        "datapointId": 1774942,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[877]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:59:56 AM"
                        }
                    },
                    {
                        "monTime": 1697727596,
                        "datapointId": 1774941,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:59:56 AM"
                        }
                    },
                    {
                        "monTime": 1697727549,
                        "datapointId": 1774937,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:59:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727545,
                        "datapointId": 1774936,
                        "repeatCount": 5,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[830]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:59:05 AM"
                        }
                    },
                    {
                        "monTime": 1697727544,
                        "datapointId": 1774935,
                        "repeatCount": 25,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:59:04 AM"
                        }
                    },
                    {
                        "monTime": 1697727489,
                        "datapointId": 1774934,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:58:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727483,
                        "datapointId": 1774933,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[770]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:58:03 AM"
                        }
                    },
                    {
                        "monTime": 1697727483,
                        "datapointId": 1774932,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:58:03 AM"
                        }
                    },
                    {
                        "monTime": 1697727429,
                        "datapointId": 1774929,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:57:09 AM"
                        }
                    },
                    {
                        "monTime": 1697727422,
                        "datapointId": 1774928,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[715]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:57:02 AM"
                        }
                    },
                    {
                        "monTime": 1697727421,
                        "datapointId": 1774927,
                        "repeatCount": 31,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:57:01 AM"
                        }
                    },
                    {
                        "monTime": 1697727360,
                        "datapointId": 1774924,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[633]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:56:00 AM"
                        }
                    },
                    {
                        "monTime": 1697727360,
                        "datapointId": 1774923,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:56:00 AM"
                        }
                    },
                    {
                        "monTime": 1697727354,
                        "datapointId": 1774922,
                        "repeatCount": 6,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:55:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727299,
                        "datapointId": 1774919,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[583]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:54:59 AM"
                        }
                    },
                    {
                        "monTime": 1697727298,
                        "datapointId": 1774918,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:54:58 AM"
                        }
                    },
                    {
                        "monTime": 1697727294,
                        "datapointId": 1774917,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:54:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727237,
                        "datapointId": 1774916,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[537]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:53:57 AM"
                        }
                    },
                    {
                        "monTime": 1697727237,
                        "datapointId": 1774915,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:53:57 AM"
                        }
                    },
                    {
                        "monTime": 1697727234,
                        "datapointId": 1774914,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:53:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727176,
                        "datapointId": 1774911,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[476]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:52:56 AM"
                        }
                    },
                    {
                        "monTime": 1697727175,
                        "datapointId": 1774910,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:52:55 AM"
                        }
                    },
                    {
                        "monTime": 1697727174,
                        "datapointId": 1774909,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:52:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727114,
                        "datapointId": 1774906,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[413]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:51:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727114,
                        "datapointId": 1774905,
                        "repeatCount": 31,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:51:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727114,
                        "datapointId": 1774904,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:51:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727054,
                        "datapointId": 1774901,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:50:54 AM"
                        }
                    },
                    {
                        "monTime": 1697727053,
                        "datapointId": 1774900,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[353]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:50:53 AM"
                        }
                    },
                    {
                        "monTime": 1697727052,
                        "datapointId": 1774899,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:50:52 AM"
                        }
                    },
                    {
                        "monTime": 1697726994,
                        "datapointId": 1774898,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:49:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726991,
                        "datapointId": 1774897,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[306]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:49:51 AM"
                        }
                    },
                    {
                        "monTime": 1697726991,
                        "datapointId": 1774896,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:49:51 AM"
                        }
                    },
                    {
                        "monTime": 1697726934,
                        "datapointId": 1774893,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:48:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726929,
                        "datapointId": 1774892,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32728]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:48:50 AM"
                        }
                    },
                    {
                        "monTime": 1697726929,
                        "datapointId": 1774891,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:48:49 AM"
                        }
                    },
                    {
                        "monTime": 1697726878,
                        "datapointId": 1774888,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32670]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:47:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726878,
                        "datapointId": 1774887,
                        "repeatCount": 27,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:47:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726874,
                        "datapointId": 1774886,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:47:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726829,
                        "datapointId": 1774885,
                        "repeatCount": 3,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:47:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726827,
                        "datapointId": 1774884,
                        "repeatCount": 5,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32627]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:47:07 AM"
                        }
                    },
                    {
                        "monTime": 1697726818,
                        "datapointId": 1774883,
                        "repeatCount": 26,
                        "data": {
                            "facility": 4,
                            "hostName": "dcqa-vr01",
                            "message": "sshd[32624]: Did not receive identification string from 172.20.41.101 port 56688",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:46:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726769,
                        "datapointId": 1774882,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:46:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726766,
                        "datapointId": 1774881,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32563]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:46:06 AM"
                        }
                    },
                    {
                        "monTime": 1697726765,
                        "datapointId": 1774880,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:46:05 AM"
                        }
                    },
                    {
                        "monTime": 1697726709,
                        "datapointId": 1774877,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:45:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726704,
                        "datapointId": 1774876,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32502]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:45:04 AM"
                        }
                    },
                    {
                        "monTime": 1697726704,
                        "datapointId": 1774875,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:45:04 AM"
                        }
                    },
                    {
                        "monTime": 1697726649,
                        "datapointId": 1774872,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:44:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726642,
                        "datapointId": 1774871,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32456]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:44:03 AM"
                        }
                    },
                    {
                        "monTime": 1697726642,
                        "datapointId": 1774870,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:44:02 AM"
                        }
                    },
                    {
                        "monTime": 1697726589,
                        "datapointId": 1774869,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:43:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726581,
                        "datapointId": 1774868,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32408]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:43:01 AM"
                        }
                    },
                    {
                        "monTime": 1697726581,
                        "datapointId": 1774867,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:43:01 AM"
                        }
                    },
                    {
                        "monTime": 1697726529,
                        "datapointId": 1774866,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:42:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726520,
                        "datapointId": 1774865,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32348]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:42:00 AM"
                        }
                    },
                    {
                        "monTime": 1697726515,
                        "datapointId": 1774864,
                        "repeatCount": 31,
                        "data": {
                            "facility": 4,
                            "hostName": "dcqa-vr01",
                            "message": "sshd[32345]: Did not receive identification string from 172.20.41.101 port 56560",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:41:55 AM"
                        }
                    },
                    {
                        "monTime": 1697726469,
                        "datapointId": 1774861,
                        "repeatCount": 5,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:41:09 AM"
                        }
                    },
                    {
                        "monTime": 1697726468,
                        "datapointId": 1774860,
                        "repeatCount": 1,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "dhcpd[2005]: reuse_lease: lease age 55 (secs) under 25% threshold, reply with unaltered, existing lease for 10.6.154.102",
                            "severity": 7,
                            "syslogTime": "Oct 19 09:41:08 AM"
                        }
                    },
                    {
                        "monTime": 1697726458,
                        "datapointId": 1774859,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32285]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:40:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726458,
                        "datapointId": 1774858,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:40:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726396,
                        "datapointId": 1774855,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32223]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:39:57 AM"
                        }
                    },
                    {
                        "monTime": 1697726396,
                        "datapointId": 1774854,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:39:56 AM"
                        }
                    },
                    {
                        "monTime": 1697726394,
                        "datapointId": 1774853,
                        "repeatCount": 6,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:39:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726335,
                        "datapointId": 1774852,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32176]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:38:55 AM"
                        }
                    },
                    {
                        "monTime": 1697726335,
                        "datapointId": 1774851,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:38:55 AM"
                        }
                    },
                    {
                        "monTime": 1697726334,
                        "datapointId": 1774850,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:38:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726274,
                        "datapointId": 1774847,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:37:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726274,
                        "datapointId": 1774846,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32129]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:37:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726273,
                        "datapointId": 1774845,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:37:53 AM"
                        }
                    },
                    {
                        "monTime": 1697726214,
                        "datapointId": 1774842,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:36:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726212,
                        "datapointId": 1774841,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32053]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:36:52 AM"
                        }
                    },
                    {
                        "monTime": 1697726212,
                        "datapointId": 1774840,
                        "repeatCount": 31,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:36:52 AM"
                        }
                    },
                    {
                        "monTime": 1697726161,
                        "datapointId": 1774837,
                        "repeatCount": 6,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[32009]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:36:01 AM"
                        }
                    },
                    {
                        "monTime": 1697726161,
                        "datapointId": 1774836,
                        "repeatCount": 27,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:36:01 AM"
                        }
                    },
                    {
                        "monTime": 1697726154,
                        "datapointId": 1774835,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:35:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726099,
                        "datapointId": 1774834,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[31948]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:34:59 AM"
                        }
                    },
                    {
                        "monTime": 1697726099,
                        "datapointId": 1774833,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:34:59 AM"
                        }
                    },
                    {
                        "monTime": 1697726094,
                        "datapointId": 1774832,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:34:54 AM"
                        }
                    },
                    {
                        "monTime": 1697726038,
                        "datapointId": 1774829,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[31884]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:33:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726037,
                        "datapointId": 1774828,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:33:58 AM"
                        }
                    },
                    {
                        "monTime": 1697726034,
                        "datapointId": 1774827,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:33:54 AM"
                        }
                    },
                    {
                        "monTime": 1697725976,
                        "datapointId": 1774824,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[31837]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:32:56 AM"
                        }
                    },
                    {
                        "monTime": 1697725976,
                        "datapointId": 1774823,
                        "repeatCount": 32,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:32:56 AM"
                        }
                    },
                    {
                        "monTime": 1697725974,
                        "datapointId": 1774822,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:32:54 AM"
                        }
                    },
                    {
                        "monTime": 1697725915,
                        "datapointId": 1774821,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[31777]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:31:55 AM"
                        }
                    },
                    {
                        "monTime": 1697725914,
                        "datapointId": 1774820,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:31:54 AM"
                        }
                    },
                    {
                        "monTime": 1697725909,
                        "datapointId": 1774819,
                        "repeatCount": 31,
                        "data": {
                            "facility": 4,
                            "hostName": "dcqa-vr01",
                            "message": "sshd[31758]: Did not receive identification string from 172.20.41.101 port 56324",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:31:49 AM"
                        }
                    },
                    {
                        "monTime": 1697725854,
                        "datapointId": 1774817,
                        "repeatCount": 4,
                        "data": {
                            "facility": 23,
                            "hostName": "dcqa-vr01",
                            "message": "zebra[912]: [EC 100663310] snmp[warning]: AgentX session to master agent attempted to be re-opened.",
                            "severity": 4,
                            "syslogTime": "Oct 19 09:30:54 AM"
                        }
                    },
                    {
                        "monTime": 1697725853,
                        "datapointId": 1774816,
                        "repeatCount": 7,
                        "data": {
                            "facility": 10,
                            "hostName": "dcqa-vr01",
                            "message": "agetty[31713]: /dev/ttyS0: not a tty",
                            "severity": 3,
                            "syslogTime": "Oct 19 09:30:53 AM"
                        }
                    },
                    {
                        "monTime": 1697725853,
                        "datapointId": 1774815,
                        "repeatCount": 30,
                        "data": {
                            "facility": 3,
                            "hostName": "dcqa-vr01",
                            "message": "systemd[1]: serial-getty@ttyS0.service: Succeeded.",
                            "severity": 6,
                            "syslogTime": "Oct 19 09:30:53 AM"
                        }
                    },
  ]
};

// Convert JSON to CSV
function convertJsonToCsv(jsonData) {
  const header = ["monTime", "datapointId", "repeatCount", "facility", "hostName", "message", "severity", "syslogTime"];
  const rows = [];

  jsonData.datapoints.forEach((datapoint) => {
    const row = [
      datapoint.monTime,
      datapoint.datapointId,
      datapoint.repeatCount,
      datapoint.data.facility,
      datapoint.data.hostName,
      datapoint.data.message,
      datapoint.data.severity,
      datapoint.data.syslogTime
    ];
    rows.push(row);
  });

  // Create CSV content
  const csvContent = [header, ...rows].map((row) => row.join(',')).join('\n');

  return csvContent;
}

const csvContent = convertJsonToCsv(jsonData);

// Write CSV to file
fs.writeFileSync('output.csv', csvContent, 'utf-8');
console.log('CSV file has been created: output.csv');
