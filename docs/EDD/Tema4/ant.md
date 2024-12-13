# **TEMA 4 Entornos de desarrollo**

Con este código creamos el xml para poder ejecutar ANT

```java
<project name="Calculadora">
    <target name="clean">
        <delete dir="build" />
    </target>

    <target name="compile" depends="clean">
        <mkdir dir="build" />
        <javac includeantruntime="false" 
        srcdir="src/com/rondon/perez/andy" destdir="build" />
    </target>

    <target name="run" depends="compile">
        <property name="arg0" value=""/>
        <java classpath="build" classname="com.rondon.perez.andy.Principal">
            <arg value="${arg0}"/>
        </java>
    </target>
</project>
```

![ant1](../../recursos/EDDtema4/ant.png)

Ejecución del comando ant compile y visualización del contenido creado

---

![ant2](../../recursos/EDDtema4/ant2.png)

Ejecución del comando ant run
