<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
    <h1 style="display: flex; align-items: center;">
        <img src="https://www.ticarte.com/sites/su/styles/maxxx/public/users/7/teaser/code-markup.jpg?itok=7aKREgQJ" alt="EDD" width="120" height="120" style="margin-right: 15px;">
        <b>TEMA 1 <small>Lenguaje de marcas</small></b>
    </h1>
</div>

### **<u>Ejercicio 1</u>**
>Identificar características (elementos, etiquetas, propiedades) de los lenguajes de marcas en diferentes documentos (*svg, HTML, *xml...)

<u>Documentos en texto plano</u><br/>
Al usar texto plano sin ningun tipo de enriquecimiento permite el uso de cualquier
software para visualizarlo

<u>Marcas insertadas en el contenido</u><br/>
En lo documento HTML, se identifica varias etiquetas como ``<head>`` o ``<body>``

<u>Componentes sencillos e intuitivos</u><br/>
Todos los componentes de los documentos son legibles y entendibles, lo que permite la creacion de lenguajes especificos dependiendo del documento

<u>Versatilidad y ámbito de utilización extenso</u><br/>
En todos los documentos ofrecidos de usan leguajes de marcas

<u>Etiquetas identificativas del tipo de contenido</u><br/>
Las etiquetas de ``<head>`` se usan para el encabezado del documento y el de ``<body>`` para el del cuerpo del documento
---

### **<u>Ejercicio 2</u>**
>Identificación de los espacios de nombres en documentos (AndroidManifest.xml). Este artículo se podría combinar con el anterior.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">

    <!-- Permisos necessaris per a l'aplicació -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <!-- Configuració de l'aplicació -->
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">

        <!-- Activitat principal -->
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

Se identifica un espacio de nombre en la segunda línea del código
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
```