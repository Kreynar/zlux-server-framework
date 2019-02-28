/*
catalina.bat start -config \conf\server_test.xml

set "JAVA_OPTS=-Dport.shutdown=8005 -Dport.http=8080"
bin\startup.bat


ideas:
1. make a temp dir for an instance of tomcat to find wars in
2. use symbolic links so that the dir that holds the war contents doesnt actually require any copying
3. tomcat unpacks wars to some temp dir of their own if you allow it to. instead, let's have the zlux app installer
unpack the wars ahead of time, so the symbolic links are the unpacked dirs
4. disable tomcat rest apis for management so that the tomcat we have is secure (no room to add or remove services except by disk)
5. one day, write a zss plugin to tomcat so that its rest apis for management use auth checks against saf through zss

*/

type Path = number;

type Tomcat {
  rootDir: Path; //path to a tomcat... if not the one zowe includes
  configXml: Path; //path to a config.xml for tomcat.... this COULD be written in JSON and transformed into XML, but...
  https: TomcatHttps;
  shutdown: TomcatShutdown;
  appRootDir: Path; //the dir in which "appBase" dirs will be made on the fly
}

type TomcatShutdown {
  port: number;
}

type TomcatHttps {
  port: number;
  key: Path;
  certificate: Path;
  certificateChain: Path;
}

class TomcatWrapper {
  constructor(private config: any) {

  }

  /* from PATH to our own dir */
  private makeLink(path: string) {
    let destination = this.config.appbase;
  }
}
