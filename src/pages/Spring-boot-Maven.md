---
title: Spring Boot依赖管理之Maven
draft: false
tags: [Spring Boot]

category: Java

date: "2018-06-12T15:36:00Z"
---

本文介绍Spring Boot的Maven依赖管理

<!-- more -->

# Spring Boot 依赖管理之Maven

maven用户可以通过继承`spring-boot-starter-parent`来获取一些有用的功能，包括：

- Java 1.8作为默认的编译版本；

- UTF-8源代码编码；

- 自动的依赖版本管理。一些通用的依赖可以省略<version>标签的声明，他们将从spring-boot-dependencies pom中继承；

- 方便的资源过滤（[resource filtering](https://maven.apache.org/plugins/maven-resources-plugin/examples/filter.html)）

- 方便的插件配置 ([exec plugin](http://www.mojohaus.org/exec-maven-plugin/), [Git commit ID](https://github.com/ktoso/maven-git-commit-id-plugin), and [shade](https://maven.apache.org/plugins/maven-shade-plugin/))
- Sensible resource filtering for `application.properties` and `application.yml` including profile-specific files (for example, `application-dev.properties` and `application-dev.yml`)

需要注意的是，由于 `application.properties` 和`application.yml`等配置文件使用Spring风格的placeholders(`${…}`)，Maven的filtering改为使用 `@..@`placeholders。（可以通过设置`resource.delimiter`属性来修改）。

### 继承 Starter Parent

```xml
<!-- Inherit defaults from Spring Boot -->
<parent>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-parent</artifactId>
	<version>2.0.2.RELEASE</version>
</parent>
```

注意：必须指定此依赖的版本号，其余的starter（parent pom里提供的）可以省略版本号

这样设置之后，如果要修改某一个依赖的版本号，可以在工程里通过property标签来设置。比如，要修改Spring Data release train的版本，在`pom.xml`中添加如下：

```xml
<properties>
	<spring-data-releasetrain.version>Fowler-SR2</spring-data-releasetrain.version>
</properties>
```

[`spring-boot-dependencies` pom](https://github.com/spring-projects/spring-boot/tree/v2.0.2.RELEASE/spring-boot-project/spring-boot-dependencies/pom.xml) 这里有支持的`properties`列表

### 不继承Parent POM来使用Spring Boot

在企业使用自定义的parent模块，或者我们要明确地声明所有的Maven配置时，我们可以不使用继承`spring-boot-starter-parent` POM的方式。要达到同样的效果（自动化的依赖管理，这里不包括插件管理），我们可以使用`scope=import`这种依赖方式，像这样：

```xml
<dependencyManagement>
		<dependencies>
		<dependency>
			<!-- Import dependency management from Spring Boot -->
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-dependencies</artifactId>
			<version>2.0.2.RELEASE</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
	</dependencies>
</dependencyManagement>
```

以上方式就不支持用properties的方式来修改某一指定依赖的版本号了，不过我们可以在`dependencyManagement`标签里，并且在`spring-boot-dependencies`之前完整得声明依赖的坐标来指定特定的版本，同样以Spring Data release train作为示例：

```xml
<dependencyManagement>
	<dependencies>
		<!-- Override Spring Data release train provided by Spring Boot -->
		<dependency>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-releasetrain</artifactId>
			<version>Fowler-SR2</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-dependencies</artifactId>
			<version>2.0.2.RELEASE</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
	</dependencies>
</dependencyManagement>
```

### Spring Boot Maven Plugin

Spring Boot includes a [Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) that can package the project as an executable jar. Add the plugin to your `<plugins>` section if you want to use it, as shown in the following example:

Spring Boot包含 一个[Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html)插件来把工程打包成可执行的jar包。此插件的使用方式为在`<plugins>`部分加入以下声明：

```xml
<build>
	<plugins>
		<plugin>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-maven-plugin</artifactId>
		</plugin>
	</plugins>
</build>
```

注意：如果使用了`Spring Boot starter parent pom`，只需要像上边这样添加`plugin`，除非想要更改parent中的设置。

如果使用了自定义parent的方式，需要添加`repackage` goal：

```xml
<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<version>2.0.2.RELEASE</version>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
```

