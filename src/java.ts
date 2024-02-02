import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "java",
  description: "Launch a Java application",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "mainclass",
    description: "To launch a class file",
    generators: filepaths({ extensions: ["java", "class"] }),
  },
  options: [
    {
      name: "-jar",
      priority: 99,
      description: "To launch the main class in a JAR file",
      args: {
        name: "JAR file",
        suggestions: [
          {
            displayName: "api-services",
            insertValue:
              "~/.m2/repository/com/fundrise/api-services/1.0.0-SNAPSHOT/api-services-1.0.0-SNAPSHOT.jar",
          },
          {
            displayName: "oauth",
            insertValue:
              "~/.m2/repository/com/fundrise/oauth-token-services/1.0.0-SNAPSHOT/oauth-token-services-1.0.0-SNAPSHOT.jar",
          },
          {
            displayName: "performance-services",
            insertValue:
              "~/repos/performance-services/performance-services/target/performance-services.jar",
          },
        ],
      },
    },
    {
      name: "-Dspring.profiles.active",
      priority: 98,
      description: "Set a system property, -Dspring.profiles.active=<VALUE>",
      requiresSeparator: true,
      args: {
        name: "profile",
        suggestions: [
          {
            displayName: "api-services",
            insertValue:
              "api-docs,local,disable-recaptcha-3,static-2fa-code,static-signup-key",
          },
          {
            displayName: "performance-services",
            insertValue: "api-docs,local",
          },
          {
            displayName: "oauth",
            insertValue: "disable-recaptcha-3,static-2fa-code,local",
          },
        ],
      },
    },
    {
      name: ["--help", "-h", "-?"],
      description: "Show help for java",
    },
    {
      name: ["--version", "-version"],
      description: "Print product version to the error stream and exit",
    },
    {
      name: ["-showversion", "--show-version"],
      description: "Print product version to the output stream and continue",
    },
    {
      name: "--dry-run",
      description:
        "Create VM and load main class but do not execute main method",
    },
    // classpath
    {
      name: ["--classpath", "-cp"],
      description: "Class search path of directories and zip/jar files",
      args: {
        name: "search files",
        template: "filepaths",
      },
    },
  ],
};
export default completionSpec;
