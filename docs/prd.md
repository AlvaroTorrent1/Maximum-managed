# PRD

## Documento de la verdad

- Proyecto: Maximum Managed
- Tipo: Web corporativa multipais para property management en Marbella
- Estado del documento: Activo
- Ultima actualizacion: 2026-03-07
- Owner del documento: Producto / diseno / desarrollo

## 1. Proposito

Este documento define la referencia unica del proyecto web de Maximum Managed. Cualquier decision de diseno, contenido o desarrollo debe alinearse con este PRD mientras no exista una version posterior aprobada.

La web debe posicionar a Maximum Managed como una empresa familiar, premium y fiable de property management en Marbella, dirigida principalmente a propietarios internacionales con sensibilidad europea y especial afinidad con el mercado neerlandes.

## 2. Objetivo de negocio

- Generar confianza inmediata.
- Explicar con claridad la propuesta de valor.
- Convertir visitas en conversaciones comerciales.
- Reforzar el posicionamiento local en Marbella.
- Presentar una imagen premium sin caer en codigos de lujo ostentoso.

## 3. Perfil de cliente objetivo

### Primario

Propietarios internacionales con vivienda en Marbella o en proceso de compra que necesitan apoyo operativo local, gestion, coordinacion, alquiler y mantenimiento.

### Secundario

- Compradores neerlandeses con expectativa de comunicacion clara y directa.
- Propietarios europeos que valoran fiabilidad, orden, transparencia y servicio integral.
- Clientes que usan la vivienda tanto para disfrute personal como para alquiler.

## 4. Requerimientos del cliente

### Requerimientos funcionales

- La web debe ser multiidioma.
- Debe existir una landing clara por idioma.
- Debe presentar la empresa, servicios, forma de trabajo, area de cobertura y contacto.
- Debe permitir derivar a una conversacion comercial inicial.
- Debe dejar preparado el espacio para incorporar foto de equipo y datos de contacto finales.

### Requerimientos de negocio

- El mensaje debe transmitir confianza, cercania y capacidad local.
- La marca debe sentirse premium, pero sobria.
- Debe diferenciarse de inmobiliarias genericas y de webs de alquiler vacacional.
- La propuesta debe comunicar que Maximum Managed piensa como propietario y actua como socio.
- La web debe reforzar la promesa central: "Enjoy Marbella. We take care of the rest."

### Requerimientos de contenido

- Explicar servicios de forma concreta y sin humo comercial.
- Destacar empresa familiar, red local y comunicacion en el idioma del cliente.
- Mantener el foco geografico en Marbella y un radio aproximado de 10 km.
- Adaptar el copy por idioma sin perder coherencia estrategica.

## 5. Alcance del producto

### En alcance

- Sitio corporativo estatico.
- Navegacion one-page por idioma.
- Versiones en `nl`, `en`, `de` y `es`.
- Secciones: hero, introduccion, sobre nosotros, servicios, metodologia, razones para elegirnos, area Marbella, contacto y footer.
- Base preparada para futuras iteraciones visuales y de contenido.

### Fuera de alcance por ahora

- CMS.
- Blog.
- Area privada.
- Formularios conectados a CRM.
- Sistema de reservas.
- Pasarela de pago.
- Backend propio.

## 6. Stack tecnico

### Stack actual confirmado en el proyecto

- Framework: Astro `^5.17.1`
- Lenguaje base: TypeScript para tipado del proyecto
- Renderizado: sitio estatico
- Estilos: CSS global propio
- Fuentes: Google Fonts (`Cormorant Garamond` y `Manrope`)
- Estructura de contenido: archivos locales por idioma en `src/data`
- Assets publicos: `public/`

### Scripts actuales

- `npm run dev`
- `npm run build`
- `npm run preview`

### Arquitectura actual

- `src/pages/` contiene una ruta por idioma.
- `src/components/SitePage.astro` centraliza la plantilla principal.
- `src/data/*.ts` centraliza el contenido traducido.
- `src/styles/site.css` define el sistema visual principal.

### Decision de stack

Se mantiene Astro como stack principal porque encaja con una web corporativa rapida, estatica, SEO-friendly y de bajo mantenimiento. No se introduce backend hasta que exista una necesidad real de formularios, CMS o automatizaciones comerciales.

## 7. Requerimientos no funcionales

- Carga rapida en movil y desktop.
- SEO tecnico correcto por idioma.
- Diseno responsive.
- Accesibilidad base solida: contraste, jerarquia semantica, navegacion clara.
- Mantenimiento simple por parte del equipo.
- Escalabilidad razonable para anadir mas idiomas, secciones o integraciones.

## 8. Propuesta de valor

Maximum Managed ofrece gestion integral de viviendas en Marbella para propietarios internacionales que quieren disfrutar de su inmueble sin asumir la carga operativa local.

Pilares del mensaje:

- Confianza.
- Gestion local real.
- Comunicacion clara.
- Servicio integral.
- Atencion personal.

## 9. Estructura de contenido

### Hero

- Posicionamiento premium + fiable.
- Titular claro orientado a tranquilidad del propietario.
- CTA principal para iniciar conversacion.
- CTA secundaria para explorar servicios.
- Pruebas de confianza rapidas.

### Introduccion

- Explicar el problema real tras la compra de la vivienda.
- Introducir a Maximum Managed como solucion integral.

### Sobre nosotros

- Historia familiar.
- Fundadores y origen del proyecto.
- Rol de partner, no solo proveedor.

### Servicios

- Alquiler y presentacion.
- Organizacion e interiorismo.
- Reformas y mejoras.
- Seguros y seguridad.
- Suministros, movilidad y logistica.
- Llaves y administracion.

### Metodologia

- Claridad en expectativas.
- Transparencia en costes y colaboradores.
- Responsabilidad compartida.

### Area

- Enfoque en Marbella ciudad y entorno cercano.
- Uso del territorio como argumento de especializacion.

### Contacto

- Cierre orientado a conversacion inicial.
- Preparado para anadir contacto real y foto del equipo.

## 10. Direccion visual

### Posicionamiento visual

La estetica debe comunicar lujo sereno, solvencia y criterio. No debe parecer una inmobiliaria agresiva ni una marca lifestyle vacia. El tono visual correcto es "premium confiable".

### Paleta de color base

- Fondo principal: `#05111b`
- Fondo superior / profundidad: `#0a2234`
- Panel translucido: `rgba(8, 24, 36, 0.78)`
- Panel suave: `rgba(8, 24, 36, 0.58)`
- Texto principal: `#eef3f7`
- Texto secundario: `#aab7c5`
- Acento oro: `#d4b173`
- Oro suave: `rgba(212, 177, 115, 0.12)`
- Lineas / bordes: `rgba(255, 255, 255, 0.1)`

### Sistema tipografico

- Serif editorial para titulares: `Cormorant Garamond`
- Sans para interfaz y lectura: `Manrope`

### Estilo visual

- Fondos oscuros con profundidad.
- Uso de transparencias y paneles con blur.
- Detalles dorados discretos.
- Mucho aire visual.
- Bordes redondeados amplios.
- Composicion elegante, no recargada.

### Direccion fotografica

- Marbella calmada y creible.
- Casco antiguo para confianza y herencia local.
- Puerto Banus para exclusividad reconocible sin exceso.
- Villas junto al mar para lifestyle y gestion patrimonial.
- Evitar imagenes de fiesta, lujo estridente o stock artificial.

## 11. Tono de marca

- Profesional.
- Cercano.
- Sobrio.
- Directo.
- Fiable.

El copy debe sonar seguro y claro. No debe usar lenguaje grandilocuente ni promesas vagas.

## 12. Principios de UX/UI

- La navegacion debe ser simple y evidente.
- Los CTA deben aparecer pronto y repetirse con criterio.
- Cada bloque debe responder a una objecion del cliente.
- La web debe poder entenderse en menos de 60 segundos.
- El contenido debe escanearse facilmente en movil.

## 13. SEO y discoverability

- Cada idioma debe tener `meta title` y `meta description` propios.
- El H1 debe ser unico y especifico.
- La semantica HTML debe mantenerse limpia.
- La estructura de URLs por idioma debe ser consistente.
- En proximas iteraciones conviene anadir:
  - etiquetas `hreflang`
  - Open Graph
  - datos estructurados de negocio local
  - favicon y assets de marca definitivos

## 14. Activos pendientes

- Foto profesional del equipo.
- Datos de contacto definitivos.
- Validacion final del naming visible de la marca.
- Seleccion de imagenes finales de Marbella.
- Revision nativa de copys en cada idioma.

## 15. Riesgos actuales

- El sitio depende de contenido hardcodeado, lo que ralentiza cambios frecuentes.
- Aun no hay mecanismo de captacion conectado a CRM o email.
- Faltan activos definitivos que refuercen la confianza final.
- Sin `hreflang` y sin capa SEO avanzada, el rendimiento organico internacional puede quedar limitado.

## 16. Roadmap recomendado

### Fase 1

- Cerrar PRD.
- Validar mensajes clave.
- Aprobar imagenes y foto de equipo.
- Completar datos de contacto.

### Fase 2

- Refinar SEO internacional.
- Anadir formulario o CTA conectado a email/CRM.
- Incorporar analytics y eventos de conversion.

### Fase 3

- Evaluar CMS ligero si el contenido empieza a cambiar con frecuencia.
- Considerar casos de exito, testimonios o paginas de servicio especificas.

## 17. Regla de gobierno

Si una decision nueva contradice este documento, debe actualizarse primero este PRD y despues el diseno o la implementacion. Este archivo es la fuente de verdad del proyecto.
