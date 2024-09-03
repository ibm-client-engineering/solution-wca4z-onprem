"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5146],{1849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(5893),i=t(1151);const r={title:"Windows VM Setup",description:"Software Setup and Configuration for Understand",sidebar_position:1,custom_edit_url:null},a="Windows VM Setup",o={id:"Create/windows_setup",title:"Windows VM Setup",description:"Software Setup and Configuration for Understand",source:"@site/docs/02-Create/windows_setup.mdx",sourceDirName:"02-Create",slug:"/Create/windows_setup",permalink:"/solution-wca4z-onprem/Create/windows_setup",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Windows VM Setup",description:"Software Setup and Configuration for Understand",sidebar_position:1,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/solution-wca4z-onprem/Prepare/prereqs"},next:{title:"Linux VM Setup",permalink:"/solution-wca4z-onprem/Create/linux_setup"}},l={},d=[{value:"Java Runtime Environment",id:"java-runtime-environment",level:2},{value:"Before you install Java:",id:"before-you-install-java",level:3},{value:"After you successfully install Java:",id:"after-you-successfully-install-java",level:3},{value:"Microsoft SQL Server Configurations",id:"microsoft-sql-server-configurations",level:2},{value:"Recommendations from Original Cookbook",id:"recommendations-from-original-cookbook",level:3},{value:"Recommendations gathered from install experience",id:"recommendations-gathered-from-install-experience",level:3},{value:"Installation steps",id:"installation-steps",level:3},{value:"<strong>Setting up an SQL user account</strong>:",id:"setting-up-an-sql-user-account",level:4},{value:"Configuring SQL Server to enable it to accept connection over TCP/iP:",id:"configuring-sql-server-to-enable-it-to-accept-connection-over-tcpip",level:3},{value:"Installing IBM AD Connect for Mainframe",id:"installing-ibm-ad-connect-for-mainframe",level:2},{value:"Installing components with the IBM ADDI Installer",id:"installing-components-with-the-ibm-addi-installer",level:2},{value:"Before you begin:",id:"before-you-begin",level:3},{value:"Configuring by using IBM AD Configuration Wizard",id:"configuring-by-using-ibm-ad-configuration-wizard",level:2},{value:"Installing and Configuring IBM AD Analyze Client",id:"installing-and-configuring-ibm-ad-analyze-client",level:2},{value:"Before you begin",id:"before-you-begin-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"windows-vm-setup",children:"Windows VM Setup"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/addi/6.1.2",children:"Official ADDI Documentation"})}),"\n",(0,s.jsx)(n.p,{children:"This document is based on cookbook that provides a set of recipes that enable you to quickly deploy ADDI with guidance and recommendations."}),"\n",(0,s.jsxs)(n.p,{children:["ADDI requires as dependencies third party applications. Several recommendations and suggestions in terms of version to be used will be presented in this document (see ",(0,s.jsx)(n.a,{href:"/Prepare/prereqs",children:"prerequisites"}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Working with recommended versions and making sure all prerequisites are met will most likely guarantee a successful deployment of ADDI."})}),"\n",(0,s.jsx)(n.h2,{id:"java-runtime-environment",children:"Java Runtime Environment"}),"\n",(0,s.jsx)(n.h3,{id:"before-you-install-java",children:"Before you install Java:"}),"\n",(0,s.jsx)(n.p,{children:"Make sure that there are no other Java versions installed on the VM or any other versions of Java have been uninstalled. Failing to do so might result an unexpected IBM ADDI behavior."}),"\n",(0,s.jsx)(n.p,{children:"To check the installed Java version, complete the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Right-click the ",(0,s.jsx)(n.strong,{children:"Start"})," menu."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose the ",(0,s.jsx)(n.strong,{children:"Terminal"})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"java -version"})," in the command line."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java --version\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Check the Java version that is displayed in the terminal window."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"after-you-successfully-install-java",children:"After you successfully install Java:"}),"\n",(0,s.jsx)(n.p,{children:"Complete the following steps to make sure that your Java is properly configured:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Start"})," menu on Windows system."]}),"\n",(0,s.jsxs)(n.li,{children:["Type ",(0,s.jsx)(n.em,{children:'\u201cadvanced"'})," in the search bar and then select ",(0,s.jsx)(n.strong,{children:"View advanced system settings"})," from the search results."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Environment Variables"})," on the Systems Properties window."]}),"\n",(0,s.jsxs)(n.li,{children:["Check and make sure that you have the correct ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," system variable (it should be OK by default) in the System variables list. ",(0,s.jsx)(n.img,{src:t(6975).Z+"",width:"1700",height:"376"})]}),"\n",(0,s.jsxs)(n.li,{children:["Important: Set the path to the Java installation folder in the System variable list to include the bin folder as in this example, ",(0,s.jsx)(n.code,{children:"C:\\Program Files\\Java\\jdk-11.0.13\\bin"}),(0,s.jsx)(n.img,{src:t(947).Z+"",width:"2112",height:"1158"})]}),"\n",(0,s.jsxs)(n.li,{children:["Add the following variables in the System variables list as shown in the following screen capture:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Variable name: ",(0,s.jsx)(n.code,{children:"JAVA_TOOL_OPTIONS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Variable value: ",(0,s.jsx)(n.code,{children:"-DEZ_JTDS_SSL=off"})," ",(0,s.jsx)(n.img,{src:t(3718).Z+"",width:"1944",height:"1084"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"microsoft-sql-server-configurations",children:"Microsoft SQL Server Configurations"}),"\n",(0,s.jsx)(n.h3,{id:"recommendations-from-original-cookbook",children:"Recommendations from Original Cookbook"}),"\n",(0,s.jsxs)(n.p,{children:["Recommended SQL server version is ",(0,s.jsx)(n.a,{href:"https://www.microsoft.com/en-us/sql-server/sql-server-2019",children:"SQL Server 2019"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure that Microsoft SQL Server instance is configured with a case-insensitive (CI) collation."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Important"}),": IBM ADDI does not support the Microsoft SQL Server instance's collation Latin1_General_CP1254_CI_AS."]}),"\n",(0,s.jsx)(n.li,{children:"Make sure that Microsoft SQL Server Agent service is started."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"recommendations-gathered-from-install-experience",children:"Recommendations gathered from install experience"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQL Server Express 2019 or 2022 will work for practice and quick projects"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"You may need to expose port 1433 for SQL Server"})})}),"\n",(0,s.jsx)(n.h3,{id:"installation-steps",children:"Installation steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the installer you've downloaded.\n",(0,s.jsx)(n.img,{src:t(6507).Z+"",width:"1016",height:"782"})]}),"\n",(0,s.jsx)(n.li,{children:"Select the first option on the wizard to install SQL Server."}),"\n",(0,s.jsxs)(n.li,{children:["Then select the third option on the wizard to install SQL Server Management Studio. or go directly to the ",(0,s.jsx)(n.a,{href:"https://aka.ms/ssmsfullsetup",children:"webpage"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"setting-up-an-sql-user-account",children:[(0,s.jsx)(n.strong,{children:"Setting up an SQL user account"}),":"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The SQL user account ",(0,s.jsx)(n.strong,{children:"must"})," have the privilege to create database, create/delete/update table, create/delete/update index, and execute sql clause."]})}),"\n",(0,s.jsx)(n.p,{children:"Complete the following steps to set up an SQL user account:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start SQL Server Management Studio."}),"\n",(0,s.jsxs)(n.li,{children:['On the connection screen, make sure to select the "Trust the certificate" checkbox. ',(0,s.jsx)(n.img,{src:t(6182).Z+"",width:"948",height:"1024"})]}),"\n",(0,s.jsxs)(n.li,{children:["Expand ",(0,s.jsx)(n.strong,{children:"Security > Logins"})," and then right-click ",(0,s.jsx)(n.strong,{children:"Logins"})," and choose ",(0,s.jsx)(n.strong,{children:"New Login"}),". Add a login name, select SQL Server Authentication, add a password, and make sure that the default database is set to master. This user is referred to as IBM AD SQL Identity."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"SQL Server Express may require a strong password. Create one that is at least 10 characters in length with numbers and alphanumeric symbols. Example: Ibm1234!Ibm1234!"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(7430).Z+"",width:"1728",height:"1426"}),"\n4. Expand ",(0,s.jsx)(n.strong,{children:"Databases > System Databases > master > Security > Users"})," and then right-click ",(0,s.jsx)(n.strong,{children:"Users"})," and choose ",(0,s.jsx)(n.strong,{children:"New User"}),". Choose the ",(0,s.jsx)(n.strong,{children:"IBM AD SQL Identity"})," user by selecting the three dots next to the login name field. Click Browse. And select the user you created in the last step. Then add the same text value to the user name field. ",(0,s.jsx)(n.img,{src:t(7916).Z+"",width:"1856",height:"1270"})," ",(0,s.jsx)(n.img,{src:t(8044).Z+"",width:"982",height:"618"})," ",(0,s.jsx)(n.img,{src:t(8189).Z+"",width:"982",height:"618"}),"\n5. Expand ",(0,s.jsx)(n.strong,{children:"Databases > System Databases > master"})," and then right-click ",(0,s.jsx)(n.strong,{children:"master"})," and choose ",(0,s.jsx)(n.strong,{children:"Properties"}),". Go to the ",(0,s.jsx)(n.strong,{children:"Permissions"})," tab for the ",(0,s.jsx)(n.strong,{children:"IBM AD SQL Identity"})," and make sure that permissions are granted for: Create database, Create function, Create procedure, Create table, and Create view. ",(0,s.jsx)(n.img,{src:t(816).Z+"",width:"1678",height:"1454"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You must complete the following steps to grant the permission ",(0,s.jsx)(n.em,{children:"only if the Rename project feature is used"})," in IBM AD Build; otherwise it is not needed."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Right-click the SQL server instance and then select ",(0,s.jsx)(n.strong,{children:"Properties"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the Server Properties window, select Permissions: From the roles list, select the ",(0,s.jsx)(n.strong,{children:"IBM AD SQL Identity"})," and then select to grant for ",(0,s.jsx)(n.strong,{children:"Alter any database"})," permission. ",(0,s.jsx)(n.img,{src:t(1193).Z+"",width:"1856",height:"1270"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-sql-server-to-enable-it-to-accept-connection-over-tcpip",children:"Configuring SQL Server to enable it to accept connection over TCP/iP:"}),"\n",(0,s.jsx)(n.p,{children:"Complete the following steps to configure SQL Server:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start SQL Server Configuration Manager."}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsxs)(n.strong,{children:["SQL Server Network Configuration > Protocols for ",(0,s.jsx)(n.code,{children:"<Instance ID>"})]})," and make sure that ",(0,s.jsx)(n.strong,{children:"Shared Memory"})," and ",(0,s.jsx)(n.strong,{children:"TCP/iP"})," are set to ",(0,s.jsx)(n.strong,{children:"Enabled"})," ",(0,s.jsx)(n.img,{src:t(4188).Z+"",width:"1348",height:"710"})]}),"\n",(0,s.jsxs)(n.li,{children:["After Enabling, right click and step into the properties for this protocol. Navigate to the IP Address tab and scroll down to the IPAll Section. Update the TCP port to 1433. ",(0,s.jsx)(n.img,{src:t(8490).Z+"",width:"2140",height:"1226"})]}),"\n",(0,s.jsxs)(n.li,{children:["Restart SQL Server Service. Right click the SQL Server record and click restart. ",(0,s.jsx)(n.img,{src:t(2253).Z+"",width:"2864",height:"1070"})]}),"\n",(0,s.jsxs)(n.li,{children:["Additionally you can restart the server within SQL Server Management Studio as well. ",(0,s.jsx)(n.img,{src:t(4542).Z+"",width:"1856",height:"1470"})]}),"\n",(0,s.jsx)(n.li,{children:"Close or minimize SQL Server Configuration Manager."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsx)(n.p,{children:"SQL Server Configuration Manager writes startup parameters to the registry. They take effect upon the next startup of the SQL Server."})}),"\n",(0,s.jsxs)(n.p,{children:["Also, even if SQL server is installed and configured on the same VM as IBM ADDI, depending on the antivirus and firewall settings, restriction issues might surface. If you find yourself in that case, check the ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/addi/6.1.1?topic=prerequisites-tcp-port-requirements-firewall-exceptions",children:"firewall exceptions page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-ibm-ad-connect-for-mainframe",children:"Installing IBM AD Connect for Mainframe"}),"\n",(0,s.jsxs)(n.p,{children:["For situations where you also plan to use AD Connect for Mainframe, check the ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/addi/6.1.1?topic=installing-ad-connect-mainframe",children:"specific instructions"})," of IBM ADDI Documentation online."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-components-with-the-ibm-addi-installer",children:"Installing components with the IBM ADDI Installer"}),"\n",(0,s.jsx)(n.h3,{id:"before-you-begin",children:"Before you begin:"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Make sure that there is no previously installed AD ADDI on the machine. If there is one, you must uninstall it first and clean up any remaining files before proceeding to the next steps."})}),"\n",(0,s.jsx)(n.p,{children:"Complete the following steps to install with the IBM ADDI installer:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Double-click the installer file."}),"\n",(0,s.jsxs)(n.li,{children:["On the Welcome page, click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the Licensing Agreements page, click \u201cI accept the terms of this license agreement\u201d, and then click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the Installation Path page, specify the installation path, and then click ",(0,s.jsx)(n.strong,{children:"Next"}),". The default installation path is ",(0,s.jsx)(n.code,{children:"C:\\Program Files\\IBM Application Discovery and Delivery Intelligence"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"Make sure that you have full read/write permission on the location where AD is installed."})]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["If the installation path that you specify does not exist, the target directory is created. Confirm the path and click ",(0,s.jsx)(n.strong,{children:"OK"})," in the Message dialog box."]}),"\n",(0,s.jsxs)(n.li,{children:["On the Select Installation Components page, select the components that you want to install, and then click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"If you are going to deploy Refactoring Assistant, then you must install the DEX Authentication Service!!!"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(4349).Z+"",width:"2118",height:"1266"}),"\n7. On the IBM Application Discovery Configuration Wizard page, make sure the IBM Application Discovery Configuration Wizard checkbox is selected. The IBM AD Configuration Wizard will open in the system's default browser after the installation is completed. Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Depending on the machine performance, you might see the \u201cContext root not found\u201d page in your browser. Wait for a minute and then refresh the page until you see IBM AD Configuration Wizard showing in your browser."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["Specify the configuration service IP address and service port for IBM AD Build Client ( this will be the IP address for the host that ADDI lives on ), and then click ",(0,s.jsx)(n.strong,{children:"Next"}),". ",(0,s.jsx)(n.img,{src:t(2101).Z+"",width:"1974",height:"1194"})]}),"\n",(0,s.jsxs)(n.li,{children:["On the Setup Shortcuts page, select the shortcuts that you want to create, and then click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The installation will take several minutes to complete. Once the installation is complete successfully, a web page will pop-up with which you can proceed to the configuration stage. It is extremely important not to shut down or restart the VM before this stage."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Be aware that ",(0,s.jsx)(n.strong,{children:"you may need to expose port 2281 for ADDI"})," (before you add certs and set up SSL/TLS the port is 2181, but you may not need to expose it)"]})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-by-using-ibm-ad-configuration-wizard",children:"Configuring by using IBM AD Configuration Wizard"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"IBM Application Discovery Configuration Wizard"})," page will open in the system's default browser after the installation is completed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Due to that self-signed certificates are used by default, you are alerted with a warning message in your browser that is similar to the following example. You need to accept the security risk before you continue. To remove the warning, you can upload your own certificates and turn on ",(0,s.jsx)(n.strong,{children:"Security > HTTPS"})," through your browser settings. ",(0,s.jsx)(n.img,{src:t(3590).Z+"",width:"1902",height:"538"})]}),"\n",(0,s.jsxs)(n.li,{children:["If you need to use ",(0,s.jsx)(n.strong,{children:"IBM Application Discovery Configuration Wizard"})," to perform the initial setup at a later time, access ",(0,s.jsx)(n.a,{href:"https://localhost:9443/ad/admin/setup",children:"https://localhost:9443/ad/admin/setup"}),". It is recommended to use ",(0,s.jsx)(n.strong,{children:"IBM Application Discovery Configuration Wizard"})," only once, right after the installation process of ",(0,s.jsx)(n.strong,{children:"IBM ADDI"})," product is completed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IBM AD Configuration Wizard"})," is now multi-language ready. Once you access its web interface, you can select the language menu from the upper right corner and choose one of the available languages. The entire configuration process will be displayed in the selected language."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Complete the following configuration steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On the Welcome page, click ",(0,s.jsx)(n.strong,{children:"Get Started!"})]}),"\n",(0,s.jsxs)(n.li,{children:["On the General Settings page, the fields should be already auto-filled with values so that you can click ",(0,s.jsx)(n.strong,{children:"Next"})," after you read and acknowledged the data. You can change, for example, the environment name, which is not mandatory though."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"When a new environment is created, a default workspace is also created and automatically attached to the new environment. The default workspace is where all IBM AD Build projects are available."})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"On the Paths page, the information of paths is also auto-filled. Those paths on disk are automatically created and used when you work with AD Projects and dependencies:"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Path"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Default projects path"}),(0,s.jsx)(n.td,{children:"Path where all mainframe projects will be stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Path for the retrieved members"}),(0,s.jsx)(n.td,{children:"Path where source code files that are automatically downloaded from Mainframe systems (by using IBM AD Connect for Mainframe) will be stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"z/OS Configurations path Path"}),(0,s.jsx)(n.td,{children:"where all z/OS configurations will be stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Manual Resolutions path"}),(0,s.jsx)(n.td,{children:"Path where all journal files will be stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Search indexes path"}),(0,s.jsx)(n.td,{children:"Path where all indexes will be stored"})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"On the Relational Database Server page, enter the following information:"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Server name"})}),(0,s.jsx)(n.td,{children:"Enter an appropriate name (alias) for the relational database server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Select database server type"})}),(0,s.jsx)(n.td,{children:"Select the appropriate relational database type."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Host"})}),(0,s.jsx)(n.td,{children:"Enter the IP or the hostname where the relational database server is installed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Port"})}),(0,s.jsx)(n.td,{children:"Enter the relational database server port. The default port for SQL Server is 1433."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Instance (optional)"})}),(0,s.jsx)(n.td,{children:"Only fill this in if a non-null instance name is defined for your SQL Server instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Username"})," and ",(0,s.jsx)(n.strong,{children:"Password"})]}),(0,s.jsx)(n.td,{children:"Enter the username and password for the IBM AD SQL Identity as previously defined in Microsoft SQL Server Configurations."})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["On the Database names page, database names are already automatically added for several common databases that AD uses, including ",(0,s.jsx)(n.strong,{children:"Annotations Database"})," name and schema name, ",(0,s.jsx)(n.strong,{children:"Audit Database"})," name, and ",(0,s.jsx)(n.strong,{children:"Cross Analysis Database"})," name as shown in the following screen capture.",(0,s.jsx)(n.img,{src:t(8892).Z+"",width:"1380",height:"1160"})]}),"\n",(0,s.jsx)(n.li,{children:"On the Graph Database Server page, set a new password for GraphDB Server's root user and confirm it."}),"\n",(0,s.jsx)(n.li,{children:"On the Batch Server page, the following information is available:"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Projects"})}),(0,s.jsx)(n.td,{children:"The asterisk * means that all projects are considered for this service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Components"})}),(0,s.jsxs)(n.td,{children:["Represents a list of component names that are initially selected for this service. ",(0,s.jsx)(n.strong,{children:"Note"}),": Additional components can be considered for this service. For more information, see the ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/SSRR9Q_6.1.1/com.ibm.ad.product.doc/configuring_ibm_ad_batch_server.html#configuring_ibm_ad_batch_server__table_vyc_ptf_cfb",children:"Additional Components"})," table in AD Knowledge Center."]})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Only change or add values in the Components field after discussing them with your IBM ADDI representative."})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["On the Summary page, click ",(0,s.jsx)(n.strong,{children:"Commit"}),". Configuration steps are automatically completed onward, and this stage can also take up to several minutes."]}),"\n",(0,s.jsxs)(n.li,{children:["When the configuration is successfully completed, click ",(0,s.jsx)(n.strong,{children:"Done"}),".",(0,s.jsx)(n.img,{src:t(954).Z+"",width:"2122",height:"1386"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-and-configuring-ibm-ad-analyze-client",children:"Installing and Configuring IBM AD Analyze Client"}),"\n",(0,s.jsx)(n.h3,{id:"before-you-begin-1",children:"Before you begin"}),"\n",(0,s.jsx)(n.p,{children:"Before you install and configure IBM AD Analyze Client, you need to install IBM Developer for z/OS (IDz) by following these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download IDz from ",(0,s.jsx)(n.a,{href:"https:/ibm.github.io/mainframe-downloads/eclipse-tools.html",children:"this website"}),", and ID v15.0.6 is recommended. Then, select IBM Developer for z/OS (IDz or IDz EE) from the list.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can also download IDz pack directly from ",(0,s.jsx)(n.a,{href:"https://www14.software.ibm.com/cgi-bin/weblap/lap.pl?popup=Y&li_formnum=L-JNIN-CFM5UU&accepted_url=https://public.dhe.ibm.comibmdl/export/pub/software/htp/zos/tools/aqua3.2/directiDz-aqua-15.0.6-win32-x86_64.zip",children:"this page"})," . If the link is not available, follow the steps below to download and install IDz."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Select Aqua 3.3."}),"\n",(0,s.jsx)(n.li,{children:"Select Installation Manager."}),"\n",(0,s.jsx)(n.li,{children:"In the next screen, select Starting from fresh. Then make sure the correct operating system is selected. Now click the download button."}),"\n",(0,s.jsxs)(n.li,{children:["After you download, unzip the downloaded file. Then open the folder and open the installer.","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"imLauncherWindows - for Admins"}),"\n",(0,s.jsxs)(n.li,{children:["imLauncherWindowsUSer - for Non-Admins\n",(0,s.jsx)(n.img,{src:t(993).Z+"",width:"2250",height:"1172"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Select the following packages for install","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"IBM Developer for z/OS"}),"\n",(0,s.jsx)(n.li,{children:"IBM Explorer for z/OS"}),"\n",(0,s.jsxs)(n.li,{children:["IBM Application Discovery\n",(0,s.jsx)(n.img,{src:t(980).Z+"",width:"2014",height:"1468"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Proceed through the rest of the installation. There are no changes to be made."}),"\n",(0,s.jsxs)(n.li,{children:["Once the download has been completed, extract and navigate to the folder ",(0,s.jsx)(n.code,{children:"C:/.../Program FilesiBM/Developer_for_zOS"}),". Now, select the eclipse application icon."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},993:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ad_installer-90493b5a495436fa757c90eb0034382e.png"},980:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ad_installer_packages-249f9d6b87022136ec158504f149a284.png"},954:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/addi_config_complete-ff37232245ed10f2ea41ca3389d9ba9f.jpg"},8892:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/database_names-670adf8741022bae7c3bf9ea480ea826.jpg"},3590:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/firefox_security_warning-bf77543e6c841364fc3a5ccadc212e1a.jpg"},4349:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/install_addi-278a905b865eab7e1703c2dc65da039e.jpg"},2101:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/install_addi_ip-81767afbb97dcdafa2c3b715c7e553d0.png"},6975:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/java_home-653610240602e7964386996758b8ea2b.jpg"},947:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/java_path_env_vars-5ad7d69da041cf3a765c97cdca68147f.jpg"},3718:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/java_path_sys_vars-ca32edcd80fae345837092d5fec89626.jpg"},8189:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_browse_objects-ecac2bd2ff1c0447d60656feac9f0a4e.png"},6182:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_connection-8c7f539f35e4e0dd40785a23177ad7c3.png"},6507:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_installation-18b98d4d16a55a843d0d7cc71d9a2182.png"},7430:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_login-764cb3af858bf72ffa85fdc543d16df9.png"},7916:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_new_user-bef3f87fe44d2929331685aaf8428659.png"},816:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_permissions-cbca7ae9c602c49906e93a07c2ddda8b.png"},1193:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_permissions2-276a1d2fc0915f06ccecb7f7a10ba39d.png"},4188:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_protocols-ee3ffd5729beb43ed6091758369e2860.png"},2253:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_restart-ca55b6dc23c5c0b615504d4d50b93fce.png"},4542:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_restart2-1001474bb427c77ea59cf6ce853b1347.png"},8044:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_select_login-f2c831c798b73a18afa90b52c5004dd6.png"},8490:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sql_server_tcp-6f6dbb47bcd699d95f12318e4573044a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);