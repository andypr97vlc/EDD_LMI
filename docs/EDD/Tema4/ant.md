<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
    <h1 style="display: flex; align-items: center;">
        <img src="https://elpythonista.com/wp-content/uploads/2020/08/Ides-2020-imagen-principal-1.png" alt="EDD" width="120" height="120" style="margin-right: 15px;">
        <b>TEMA 4 <small>Entornos de desarrollo</small></b>
    </h1>
</div>

---

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