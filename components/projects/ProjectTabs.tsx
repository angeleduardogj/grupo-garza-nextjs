'use client';

import { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

// Data structure based on user request
const projectData = [
  {
    titulo: "Acapulco",
    proyectos: [
      {
        titulo: "Aristos",
        descripcion: "El trabajo realizado consistió en el retiro del escombro en las habitaciones, producto de los daños ocasionados por el huracán Otis en 2024. Posteriormente, se llevó a cabo la rehabilitación completa de las habitaciones, lo que incluyó labores de pintura, cambio de piso, instalación de nuevos vidrios, limpieza, reemplazo de aluminio y cancelería, entre otros detalles. El objetivo fue devolver a las habitaciones su funcionalidad y mejorar su estética, asegurando un ambiente cómodo y seguro para los usuarios.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156849/Aristos_1_fkhkwa.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156852/Aristos_2_uydhoc.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156867/Aristos_3_akmjg5.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156870/Aristos_4_ssq9cq.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156873/Aristos_5_vg3aqu.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156876/Aristos_6_ul14gb.jpg"
        ]
      },
      {
        titulo: "Calle Insurgentes",
        descripcion: "El trabajo realizado consistió en la construcción de un muro de contención, diseñado para estabilizar y prevenir deslizamientos de tierra o erosión en áreas específicas. Este muro se realizó desde 0. Se comenzó por realizar las excavaciones, el desplante del terreno, el armado y el colado. Fue construido con materiales resistentes y adecuados para garantizar su durabilidad y funcionalidad, proporcionando soporte estructural en el terreno afectado. El objetivo principal de la obra fue asegurar la integridad del espacio, protegiendo de futuros eventos como en los huracanes Otis y Jhon tanto la infraestructura como el entorno circundante.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156838/Calle_Insurgentes_1_vr3r9v.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156879/Calle_Insurgentes_2_dcgu9h.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156882/Calle_Insurgentes_3_bitcnk.jpg"
        ]
      },
      {
        titulo: "Mar Azul",
        descripcion: "En Mar Azul, se llevó a cabo una rehabilitación integral de todas las fachadas, incluyendo la frontal, trasera y laterales, que resultaron gravemente afectadas por el huracán. El trabajo consistió en la reestructuración completa de las fachadas, lo que incluyó la colocación de pastas y estucos aplanados pulidos con mallas para garantizar su resistencia y acabados de alta calidad. Además, se realizó la pintura de las fachadas, instalación de nuevas ventanas y se llevaron a cabo trabajos de plomería y electricidad para adecuar completamente los espacios. El objetivo fue restaurar la apariencia y funcionalidad del edificio, dejándolo en perfectas condiciones para su uso.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156844/Mar_Azul_1_wncilj.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156886/Mar_Azul_3_bzx8tv.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156889/Mar_Azul_4_czaf5i.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156841/Mar_Azul_5_gdk0t4.jpg"
        ]
      },
      {
        titulo: "PETEN",
        descripcion: "Se realizó el suministro, creación y colocación del diseño completo del barandal perimetral primordialmente creado con acero, vidrio y aluminio para 48 departamentos. El trabajo incluyó la ingeniería necesaria para el diseño, así como la elaboración de las piezas y herrajes de los barandales. Se llevó a cabo el desmonte de los barandales anteriores y la instalación de los nuevos, además del colado de todo el perfil de la balconería. En paralelo, se realizó la albañilería para construir la cenefa perimetral que sirve de soporte. Para garantizar la seguridad y estabilidad de los inquilinos, se realizó el anclaje de los barandales y postes, que luego fueron colados para asegurar su correcta instalación y durabilidad.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156847/Peten_1_nxwaen.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156891/Peten_2_ikb4zl.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156893/Peten_4_ofilu4.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156836/Peten_5_d8zufg.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769156833/Peten_3_vkr1pt.jpg"
        ]
      }
    ]
  },
  {
    titulo: "CDMX",
    proyectos: [
      {
        titulo: "Acoxpa",
        descripcion: "En Acoxpa, realizamos la rehabilitación completa de varios departamentos para hacerlos habitables y funcionales. Los trabajos principales incluyeron albañilería, como aplanados, pintura, revoques y resanes, así como la instalación de vidrio y aluminio. Además, se llevó a cabo la impermeabilización para garantizar la protección de los espacios. En el área de plomería, se realizaron cambios de llaves mezcladoras, monomandos y llaves de regaderas. En cuanto a la parte eléctrica, se cambiaron contactos, pastillas, lámparas, apagadores y centros de carga. Finalmente, se realizó la pintura completa del departamento para darle un acabado renovado y estéticamente agradable.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157403/Acoxpa_1_zenzwd.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157411/Acoxpa_2_aaabyx.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157407/Acoxpa_3_h6de8b.jpg"
        ]
      },
      {
        titulo: "Chalco",
        descripcion: "En Chalco, realizamos trabajos de desazolve posterior a las inundaciones sufridas, utilizando una sonda mecánica eléctrica para llevar a cabo una limpieza profunda de toda la cañería. Esto permitió asegurar que el agua fluya correctamente hacia los canales de desagüe y drenaje. El objetivo fue prevenir futuros problemas durante la temporada de lluvias, asegurando que el sistema de drenaje funcione de manera óptima.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157417/Chalco_1_gcooas.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157422/Chalco_2_jqj9cc.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157426/Chalco_3_wvpetz.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157430/Chalco_4_c9ydce.jpg"
        ]
      },
      {
        titulo: "Edificio 2-3-4",
        descripcion: "Después de los incidentes ocurridos el 2 de octubre, se tomó la medida de blindar todo el perímetro con tapial de madera para proteger la infraestructura y evitar actos de vandalismo. Además, se realizó el cambio de algunos vidrios que habían sido afectados, con el fin de prevenir daños adicionales al inmueble durante las manifestaciones. Estas acciones fueron esenciales para garantizar la seguridad y la integridad del edificio en ese momento crítico.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157434/LUSH_234__1_ikfzwx.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157439/LUSH_234__2_jtsszs.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157447/LUSH_234__4_w1tia1.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157475/LUSH_234__5_z0ue4s.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157451/LUSH_234__6_qeua0a.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157456/LUSH_234__7_pkreke.jpg"
        ]
      },
      {
        titulo: "PREMIER",
        descripcion: "Se realizó la creación de reconocimientos personalizados basados en un diseño arquitectónico y renderizado previamente definido, para sus empleados, elaborados en acero inoxidable utilizando corte láser y trabajos de CNC. Además, se fabricaron esferas de lámina de acero negro, calibre 10, las cuales fueron moldeadas mediante láser. Estas esferas luego pasaron por un proceso de pintado, pulido y aplicación de primer para asegurar una terminación de alta calidad. El objetivo de estos trabajos fue ofrecer productos de distinción, con un diseño preciso y acabado profesional, para honrar el esfuerzo de los empleados.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157460/Premiere_1_zf390n.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157465/Premiere_2_cwqnic.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157479/Premiere_3_b73qyo.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157399/Premiere_4_oymsj2.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157470/Premiere_5_ghotzh.jpg"
        ]
      }
    ]
  },
  {
    titulo: "Tlaxcala",
    proyectos: [
      {
        titulo: "Huamantla",
        descripcion: "Cerca de la ex hacienda de Soltepec, realizamos la remodelación de una cabaña de estilo rustico, donde se llevaron a cabo trabajos de construcción para crear un tapanco de madera. Comenzamos con la creación de todo el marco metálico necesario para soportar la estructura, formada con vigas IPR de acero estructural. Luego, se colocaron las tablas y tablones para formar el tapanco, el cual fue destinado a funcionar como un estudio. Una vez armado, se procedió al anclaje y barreno de las piezas para garantizar su estabilidad. Finalmente, se realizaron trabajos de barniz para el acabado, así como, de soldadura para asegurar la solidez y durabilidad de toda la estructura. El resultado fue un espacio renovado y funcional, con una estructura segura y bien definida.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157782/Exhacienda_Soltepec_1_wtzzlw.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157791/Exhacienda_Soltepec_3_ipcyib.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157795/Exhacienda_Soltepec_2_ykyc3h.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157800/Exhacienda_Soltepec_4_mpnecl.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157845/Exhacienda_Soltepec_6_o6evba.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157805/Exhacienda_Soltepec_5_muemdt.jpg"
        ]
      },
      {
        titulo: "Santa Julia",
        descripcion: "En Plaza Santa Julia, realizamos la instalación de cortinas de acero mecanizadas y automatizadas, diseñadas específicamente para la plaza comercial. Estas cortinas cuentan con motores mecánicos y una botonera para un control fácil y seguro, proporcionando tanto seguridad como una estética adecuada para el inmueble. Las cortinas fueron fabricadas con duela perforada y duela troquelada, materiales que ofrecen durabilidad y diseño. Además, realizamos trabajos de herrería y acero para construir el portón de acceso a proveedores. Este portón fue desmantelado y colocado de nuevo, aplicándole primer para asegurar su protección. El portón fue armado en el taller, transportado al sitio y posteriormente instalado con los tejuelos y bibeles en la parte superior e inferior, garantizando una estructura sólida y funcional. De igual manera se instaló el apartarrayos así como toda la línea para para bajar cuando cae un rayo en las estructuras y vaya a la Tierra.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157774/Plaza_comercial_Santa_Julia_10_t365bz.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157786/Plaza_comercial_Santa_Julia_11_pmctrd.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157778/Plaza_comercial_Santa_Julia_12_rawbqu.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157809/Plaza_comercial_Santa_Julia_1_p0z4wa.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157823/Plaza_comercial_Santa_Julia_2_dek0xe.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157814/Plaza_comercial_Santa_Julia_3_rgaqlb.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157833/Plaza_comercial_Santa_Julia_4_upsnot.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157828/Plaza_comercial_Santa_Julia_5_k7ylvn.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157819/Plaza_comercial_Santa_Julia_6_hph6gn.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157865/Plaza_comercial_Santa_Julia_7_n0t2lq.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157859/Plaza_comercial_Santa_Julia_8_p7rvz1.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769157870/Plaza_comercial_Santa_Julia_9_ev57w8.jpg"
        ]
      }
    ]
  },
  {
    titulo: "San José Chiapa",
    proyectos: [
      {
        titulo: "Audi",
        descripcion: "El trabajo realizado consistió en el envío de personal altamente calificado para diversas tareas en la planta. Se enviaron operadores de retroexcavadora, excavadora, motoconformadora, pipa y payloader para habilitar las terracerías necesarias para el desplante de los elementos metálicos. Además, se gestionó de manera administrativa el acceso del personal a la planta, asegurando que se cumplieran los requisitos de recursos humanos, incluyendo la gestión de nómina y la asignación de personal calificado. También se enviaron montadores especializados en soldadura y levantamiento de estructuras metálicas, así como lamineros para realizar todo el trabajo requerido. Además, se dispuso de operadores de grúa para levantar y posicionar las estructuras metálicas con precisión, asegurando la correcta instalación y el avance de la obra.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158273/Audi_1_wptie6.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158278/Audi_2_pan8jv.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158283/Audi_3_p6xkne.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158349/Audi_4_cmqi5u.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158343/Audi_5_of8yny.jpg"
        ]
      },
      {
        titulo: "Ciudad Modelo",
        descripcion: "Para este proyecto, se envió un equipo compuesto por técnicos e ingenieros eléctricos especializados en el cambio de las líneas de alta, media y baja tensión de las lámparas urbanas a lo largo del corredor. Además, se llevaron a cabo labores de pintura en las guarniciones de las banquetas, con el fin de darles un acabado renovado y mejorar la estética del área. Todo el proceso se realizó con la finalidad de optimizar tanto la funcionalidad como la apariencia del espacio urbano.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158354/Ciudad_Modelo_1_ogpwt7.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158289/Ciudad_Modelo_2_izosez.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158260/Ciudad_Modelo_3_umlydh.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158268/Ciudad_Modelo_4_yhdaos.jpg"
        ]
      }
    ]
  },
  {
    titulo: "Celaya",
    proyectos: [
      {
        titulo: "Montaje de Estructura",
        descripcion: "El trabajo realizado consistió en el uso de grúas para subir vigas de acero con la ayuda de montadores especializados. Una vez que las vigas fueron colocadas en su lugar, se les aplicó primer para asegurar un acabado adecuado y protegerlas. Posteriormente, se instalaron las placas de sujeción y los cartabones de acero, elementos esenciales para garantizar la resistencia y estabilidad de la estructura. Este proceso se llevó a cabo con precisión y cuidado, asegurando que las vigas estuvieran firmemente ancladas y listas para soportar la carga requerida.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158488/Celaya_1_fituhb.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158494/Celaya_3_s7eism.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158499/Celaya_2_eaietd.jpg"
        ]
      }
    ]
  },
  {
    titulo: "Pachuca",
    proyectos: [
      {
        titulo: "Estructura y Losacero",
        descripcion: "El trabajo realizado consistió en la colocación de lámina tipo losacero y el desplante de las vigas para estructurar la base del proyecto. Se realizaron trabajos de colocación de pernos y sujeción de toda la estructura metálica, asegurando que todo estuviera correctamente anclado antes de proceder con el colado. Para realizar estos trabajos, se proporcionaron herreros y soldadores especializados, quienes utilizaron soldadura de tipo flux, soldadura de micro alambre, así como soldadura de electrodo. Este proceso garantizó una estructura sólida y segura, lista para soportar las siguientes fases de la obra.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158566/Plaza_Comercial_3_bfbdnm.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158572/Plaza_Comercial_4_phszmk.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158615/Plaza_Comercial_1_qdpxgy.jpg"
        ]
      }
    ]
  },
  {
    titulo: "Puebla",
    proyectos: [
      {
        titulo: "10 y Punto",
        descripcion: "En esta agencia de publicidad y marketing se llevó a cabo un proyecto integral de reestructuración y diseño para optimizar el uso de los espacios disponibles. El trabajo incluyó la colocación de fachaleta en la parte del fondo, así como el cambio completo del sistema eléctrico, que fue conectado mediante tubería tipo conduit, siguiendo un diseño industrial. También se realizó la instalación de nuevas lámparas, protecciones y la creación de una mesa volada con contactos integrados, para mejorar la distribución del espacio. Además, se diseñó e instaló una puerta de seguridad tipo banco con su logotipo integrado. En cuanto a las oficinas, se retiraron las películas esmeriladas y se crearon dos nuevas oficinas. Como parte de la remodelación, se colocó un pizarrón en uno de los muros para facilitar el trabajo creativo del equipo.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159169/Agua_Azul_1_csloii.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159176/Agua_Azul_2_sjjga6.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159184/Agua_Azul_3_wfp0y9.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159192/Agua_Azul_4_rmt5kn.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159200/Agua_Azul_5_ghpzqr.jpg"
        ]
      },
      {
        titulo: "Atlixco",
        descripcion: "El trabajo realizado consistió principalmente en la colocación y montaje para una nave industrial de láminas tipo R101, tanto pintro como de zintro alum, para el forrado total de la bodega en techos y faldones. Asimismo, se brindó apoyo con algunos cálculos estructurales y creación de canalones de desagüe a diseño. Este proceso se ejecutó con precisión para garantizar la durabilidad de la estructura, cumpliendo con los estándares requeridos.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159208/Atlixco_1_ty1xep.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159215/Atlixco_2_wbg2f6.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159223/Atlixco_3_ia0jkj.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159230/Atlixco_4_mzz1uh.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159238/Atlixco_5_e1tgn0.jpg"
        ]
      },
      {
        titulo: "San Martín",
        descripcion: "Se realizaron diversas mejoras en las viviendas, comenzando con la reparación de grietas mediante el uso de grapas de alambrón, para asegurar una fijación duradera. Posteriormente, se colocaron mallas de fibra de vidrio y malla metálica para reforzar las paredes, seguidas de un aplanado pulido y acabado en las recámaras tanto al interior como exterior, para garantizar una superficie uniforme y estética, terminando con trabajos de pintura. Además, se llevó a cabo la impermeabilización de los inmuebles para prevenir filtraciones de agua, incluyendo el sellado con acrilastic y duretan de la ventaneria para evitar que el agua se filtrara. También se realizaron reparaciones en el baño debido a problemas de humedad y hongo del salitre, asegurando la funcionalidad y la correcta conservación de los espacios.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158771/Casa_San_Mart%C3%ADn_1_jitzkw.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158765/Casa_San_Mart%C3%ADn_2_cahf1y.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158778/Casa_San_Mart%C3%ADn_3_jwdd10.jpg"
        ]
      },
      {
        titulo: "Casa San Rafael Comac",
        descripcion: "El trabajo realizado empezó con la construcción de la barda perimetral para garantizar la seguridad y delimitación del área. Posteriormente, se llevaron a cabo trabajos de aplanado, revoque, resane y pulido en las superficies para lograr acabados finos y uniformes. También se realizó la impermeabilización para proteger las paredes y evitar filtraciones de agua. En cuanto a los pisos, tiramos el firme existente y colocamos nuevos pisos para mejorar la estética del espacio. Se aplicó estuco en ciertas áreas para un acabado más duradero. Además, se crearon planchas de baño y se instalaron marcos de puerta para completar la estructura interior. Se trabajó en la nivelación de los muros y el ajuste del nivel del piso para asegurar una distribución adecuada. También se colocó un domo para aprovechar mejor la luz natural, y se forró el pozo para mejorar la seguridad y durabilidad del área.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159114/Casa_San_Rafael_Comac_10_uxbipp.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158845/Casa_San_Rafael_Comac_11_deyasm.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158791/Casa_San_Rafael_Comac_1_mpbsb5.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158784/Casa_San_Rafael_Comac_2_zioeyl.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158798/Casa_San_Rafael_Comac_3_jewaad.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158804/Casa_San_Rafael_Comac_4_bhefvy.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158811/Casa_San_Rafael_Comac_5_eiddbe.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158824/Casa_San_Rafael_Comac_6_eozmv0.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158818/Casa_San_Rafael_Comac_7_kvpfpi.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158831/Casa_San_Rafael_Comac_8_y8rnzn.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158838/Casa_San_Rafael_Comac_9_tckihs.jpg"
        ]
      },
      {
        titulo: "Ciclovía",
        descripcion: "En este proyecto nos encargamos de realizar trabajos de pintura y limpieza, que incluyeron un trabajo general para dejar en condiciones óptimas el área designada, seguido de un lijado adecuado para preparar las superficies antes de pintar. Posteriormente, se llevó a cabo la pintura de las zonas afectadas para garantizar la visibilidad y el acabado adecuado de la ciclovía. Para facilitar el trabajo en áreas elevadas, utilizamos grúas tipo Genie, que permitieron un acceso seguro y eficiente para aplicar la pintura y realizar las tareas de mantenimiento en altura. Todo el proceso fue realizado con el objetivo de mejorar la infraestructura y la seguridad de la ciclovía.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158852/Ciclovia_1_gtdj1v.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158860/Ciclovia_2_felxjd.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158867/Ciclovia_3_opzj8m.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158874/Ciclovia_4_sw0c9m.jpg"
        ]
      },
      {
        titulo: "Colado residencial",
        descripcion: "El trabajo realizado consistió en la instalación de viguetas y bovedillas para la estructura del inmueble, proporcionando una base sólida para el siguiente paso en la construcción. Posteriormente, se instalaron las redes eléctricas necesarias para asegurar la funcionalidad del sistema en el inmueble. También se colocó malla electrosoldada, que refuerza la estructura y proporciona estabilidad. Después de preparar adecuadamente el espacio, se habilitó para recibir el colado de concreto de ingeniería. Una vez realizado el colado, se procedió a impermeabilizar las superficies con carpeta para evitar filtraciones de agua y asegurar la durabilidad. Finalmente, se realizaron los trabajos de pulido o afinado para garantizar un acabado limpio y uniforme. Además, se construyeron los pretiles, que son las mochetas perimetrales que rodean todas las azoteas de las casas, completando la protección y estructura externa del inmueble.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159283/Colado_1_ggyjal.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159291/Colado_2_c8ocu1.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159298/Colado_3_hogqtu.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159306/Colado_4_txd8su.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159314/Colado_5_yts903.jpg"
        ]
      },
      {
        titulo: "Constitución #8",
        descripcion: "El trabajo realizado consistió en la ejecución de trabajos aéreos con el equipo de seguridad pertinente, para sellar la cancelería en los exteriores del edificio. Este proceso tuvo como objetivo principal evitar filtraciones de agua, asegurando que las estructuras de aluminio estuvieran correctamente selladas. Nos enfocamos especialmente en el sellado de tapas y juntas de aluminio, utilizando materiales adecuados para garantizar la impermeabilidad y durabilidad de la cancelería, protegiendo así el interior de posibles daños causados por el clima. Estos trabajos aéreos permitieron un acceso eficiente a las áreas difíciles de alcanzar, asegurando un sellado efectivo en todo el perímetro.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159329/Constitucion_8__1_ex75vs.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159321/Constitucion_8__2_qbplqy.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159336/Constitucion_8__3_weayqr.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159344/Constitucion_8__4_y7zb08.jpg"
        ]
      },
      {
        titulo: "Farmacias Guadalajara",
        descripcion: "Se realizó la habilitación completa de la cimentación para poder proceder a desplantar. El proceso comenzó con la coordinación con el dueño del terreno, quien se encargó de la cimentación inicial. Posteriormente, se trabajó en el armado de castillos y zapatas, utilizando materiales específicos como varilla de diferentes tamaños, incluyendo varilla de media pulgada, tres octavos, y hasta de dos pulgadas, para garantizar la estabilidad de la estructura. Los fierreros fueron los encargados de realizar la colocación adecuada de la varilla para f",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158881/Farmacias_Guadalajara_1_xc1kwl.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158904/Farmacias_Guadalajara_2_cbvu0i.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158896/Farmacias_Guadalajara_3_nbyalt.jpg"
        ]
      },
      {
        titulo: "Edificio Reforma Agua Azul",
        descripcion: "En este proyecto llevamos a cabo una serie de trabajos de habilitación y remodelación para mejorar los departamentos. Comenzamos con la reparación de grietas y resanes en las paredes, seguido de los trabajos de revoque y aplicación de pintura en dos manos para asegurar un acabado de alta calidad. Además, se habilitaron regaderas en algunos espacios y se cambió la cocina, proporcionando instalaciones más modernas y funcionales. También se realizaron trabajos en el Roof Garden, donde se repararon y renovaron los pretiles, aplicando pintura y realizando resane y revoque para garantizar la estética y la protección de la estructura. Para evitar filtraciones en el Roof Garden, se cambió el piso por un tipo cuadrado, más adecuado para resistir la humedad. Finalmente, se habilitó el espacio exterior con un pequeño proyecto de jardinería, agregando elementos verdes que complementan el diseño y mejoran el ambiente. Todo esto contribuyó a la renovación y modernización del inmueble, creando un espacio más cómodo y seguro para los residentes.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158723/Reforma_Agua_Azul_1_xlgcbm.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158723/Reforma_Agua_Azul_1_xlgcbm.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158729/Reforma_Agua_Azul_2_kwejdy.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158741/Reforma_Agua_Azul_4_ilckwm.jpg"
        ]
      },
      {
        titulo: "Parque Industrial Finsa",
        descripcion: "En este proyecto se llevó a cabo el suministro, creación y colocación de columnas de acero, esenciales para el desplante de una bodega comercial. Este trabajo incluyó la operación de grúas para el levantamiento y colocación preciso de las columnas, asegurando que se cumplieran los requisitos estructurales del proyecto. Posteriormente, se realizó el forrado de las estructuras, completando así el proceso de construcción para garantizar la estabilidad y funcionalidad de la bodega comercial. Todo el trabajo se ejecutó con materiales de alta calidad y con el objetivo de asegurar una base sólida y duradera para la bodega.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158889/Finsa_1_olxyat.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158911/Finsa_2_ebye7v.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158919/Finsa_3_hxl330.jpg"
        ]
      },
      {
        titulo: "Imagen Acústica",
        descripcion: "Realizamos un cambio completo en la imagen corporativa del inmueble. Esto incluyó una propuesta de nuevos colores para las paredes y espacios, que fueron aplicados mediante trabajos de pintura en todo el edificio. Además, se llevó a cabo el reemplazo de las lámparas y la actualización del sistema de iluminación, buscando mejorar tanto la estética como la seguridad del lugar. En cuanto al sistema eléctrico, se cambiaron los contactos y apagadores para asegurar un funcionamiento adecuado. También se implementaron mejoras en la iluminación preventiva, enfocándonos en áreas específicas del inmueble que presentaban riesgos potenciales, garantizando una mayor seguridad para el personal y visitantes. El objetivo fue crear un ambiente más seguro, eficiente y visualmente renovado.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158934/Imagen_Acustica_1_mw0lnk.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158926/Imagen_Acustica_2_qngd0l.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158942/Imagen_Acustica_3_imqfuj.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158958/Imagen_Acustica_4_lykvgt.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159352/Imagen_Acustica_5_wb1htc.jpg"
        ]
      },
      {
        titulo: "Casa de Lomas de Angelópolis",
        descripcion: "Se realizaron múltiples trabajos de remodelación y mejora en diversas áreas del inmueble. Primero, se llevó a cabo un trabajo de jardinería para embellecer el entorno. En el Roof Garden, se habilitaron y mejoraron los espacios, aplicando pintura, aplanado y reparando grietas en las superficies. También se cambiaron los pisos y se habilitaron los baños, además de realizar modificaciones en los domos para mejorar la iluminación y ventilación. Se llevó a cabo la instalación de malla-sombra en el Roof para ofrecer protección adicional contra el sol. Además, se colocaron muros verdes artificiales, que aportaron un toque natural y moderno al espacio exterior. Se trabajó en la impermeabilización del Roof Garden, realizando lo que se conoce como junta o lecherado para evitar filtraciones de agua. En la cocina, se realizó una remodelación completa, incluyendo la creación de alacenas. Se cambió el piso de porcelanato por laminado y se repararon zoclos para un acabado más armónico. También se atendieron reparaciones en los baños, mejorando los cespoles de baño, las tarjas y la pendiente de drenaje para asegurar el funcionamiento adecuado. En general, el proyecto buscó mejorar tanto la estética como la funcionalidad del inmueble, creando un ambiente más cómodo y seguro para los residentes.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159359/Lomas_de_Angelopolis_1_fconxh.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159366/Lomas_de_Angelopolis_2_hoicoo.jpg"
        ]
      },
      {
        titulo: "Normal del Estado de Puebla",
        descripcion: "Nos encargamos de corregir y mejorar el sistema de drenaje pluvial. Las líneas de bajadas pluviales se movieron y canalizaron adecuadamente hacia las bocas de tormenta. Este trabajo fue fundamental para evitar futuras inundaciones en las aulas, garantizando que el agua se dirigiera correctamente hacia el sistema de drenaje. Además, creamos sardineles, que son pequeños bordes similares a los de las regaderas, con el propósito de evitar que el agua ingresara a los salones durante los períodos de inundación. Estos elementos ayudaron a proteger los espacios interiores de la escuela, asegurando que las condiciones en las aulas permanecieran secas y seguras en caso de fuertes lluvias.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159059/Normal_1_yheejq.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158975/Normal_2_ptoer3.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158982/Normal_3_i3ssbr.jpg"
        ]
      },
      {
        titulo: "CEDIS Oxxo Puebla",
        descripcion: "En este proyecto se llevaron a cabo diversos trabajos de jardinería, tanto preventivos como correctivos. Uno de los principales trabajos fue el cambio de pasto, utilizando pasto Cuernavaca para sustituir el pasto peruano. Además, se hizo el mantenimiento recurrente de las áreas verdes, que incluyó corte de césped, fumigación, cambio de tierra, aplicación de fertilizantes y abonos para mantener el espacio en óptimas condiciones. También se atendió una plaga en la zona conocida como 'La Ceiba', específicamente una plaga llamada 'gallina ciega', que estaba afectando el área. De igual manera, implementamos un sistema de control para su combustible tipo UREA utilizando un dique de contención de fluidos, que es una estructura similar a una pileta, junto con láminas y malla ciclónica para proteger y mejorar el espacio. En el parque vehicular, realizamos trabajos de habilitación del espacio, que incluyó la colocación de una plancha de concreto, asegurando la durabilidad y funcionalidad de la zona. Todo el trabajo se hizo con el objetivo de mantener el área limpia, segura y bien acondicionada, tanto para el entorno exterior como para las necesidades operativas.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158989/oxxo_1_erfej7.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159005/oxxo_2_smt8ou.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159374/oxxo_3_opo6ze.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159382/oxxo_4_okgajj.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158997/oxxo_dique_1_wpvua1.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159012/oxxo_dique_2_srzsyo.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159389/oxxo_dique_3_hzkoom.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159397/oxxo_dique_4_joeita.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159404/oxxo_dique_5_hfdrqr.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159412/oxxo_dique_6_jmjkfd.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159419/oxxo_dique_7_kcq1xq.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158706/oxxo_dique_8_ka9kft.jpg"
        ]
      },
      {
        titulo: "Gasolineras PEMEX",
        descripcion: "Realizamos un servicio general a través de pólizas de mantenimiento hechas a la medida mismas que, incluían una variedad de tareas. Se llevó a cabo el cambio de láminas y pintura en áreas clave, como las líneas de tránsito y las flechas de entrada y salida, con el objetivo de mejorar la señalización y la seguridad en el lugar. Además, se realizó la limpieza y mantenimiento de los baños, garantizando que estuvieran en condiciones óptimas para los usuarios. Se efectuó el reemplazo de todas las luminarias por LED en toda la estructura metálica de la gasolinera, lo que mejoró la eficiencia energética y la visibilidad. También se hizo la limpieza e impermeabilización de las láminas y canalones para proteger las instalaciones de las inclemencias del clima. En cuanto a las oficinas, se realizaron cambios en la ventanería, incluyendo ventanas y cristalería de vidrio y aluminio. Además, se colocó una película especial llamada Filtrasol en los vidrios del área de facturación, lo cual ayuda a reducir el calor y la exposición a los rayos UV, mejorando el confort en el espacio de trabajo. Estos trabajos contribuyeron a mantener las instalaciones de la gasolinera seguras, funcionales y estéticamente agradables.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159020/Pemex_1_zjnra1.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159028/Pemex_2_tqt2qs.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159036/Pemex_3_kmwd3i.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158712/Pemex_4_ur5qas.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158717/Pemex_5_ccgmeg.jpg"
        ]
      },
      {
        titulo: "Tehuacán",
        descripcion: "Se llevó a cabo la construcción de la estructura metálica, que fue la base para la futura habilitación del espacio. El trabajo comenzó con la instalación y montaje de las vigas, seguidas por la unión de las mismas para garantizar la solidez de la estructura. Además, se trabajó en los canales necesarios para soportar la carga de la construcción. Una vez que la estructura metálica estuvo completamente montada, se procedió con el forrado de la misma, lo cual permitió crear un acabado sólido y seguro para el espacio. Este trabajo fue esencial para habilitar el lugar, que estaba destinado a convertirse en oficinas comerciales. Con la estructura lista y adecuadamente forrada con durock y tabla roca, se logró crear un espacio funcional y seguro para su posterior uso.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159043/Tehuacan_1_eeqmiu.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159051/Tehuacan_2_ruqwau.jpg"
        ]
      },
      {
        titulo: "Tepeaca",
        descripcion: "Se realizó la habilitación de una marmolera, comenzando con un proceso de impermeabilización utilizando un material especializado conocido como carpeta asfáltica, el cual garantiza la protección contra filtraciones y humedad. Además, se llevó a cabo un completo proyecto eléctrico, que incluyó el diseño e instalación de un sistema de paneles solares para alimentar el inmueble de manera más sostenible. Para ello, se instaló una subestación eléctrica que permitió la correcta distribución de la energía. También se realizó toda la red eléctrica, incluyendo el tendido de cableado necesario para habilitar las oficinas y equipos que requerían energía, asegurando que las máquinas y el inmueble funcionaran de manera eficiente y segura. Este trabajo permitió acondicionar la marmolera con las instalaciones adecuadas, optimizando el uso de energía y mejorando la funcionalidad del espacio.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159066/Tepeaca_1_qt5b3v.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159075/Tepeaca_2_uhxaat.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158747/Tepeaca_3_erfoyq.jpg"
        ]
      },
      {
        titulo: "Volkswagen",
        descripcion: "En este proyecto, se desplegó un equipo diverso de profesionales, incluyendo albañiles, plomeros, carpinteros, pintores y ayudantes, pero el enfoque principal fue la contratación de soldadores capacitados para la habilitación de las naves industriales, específicamente la nave 103. Se trabajó intensamente con el personal de soldadores y personal técnico especializado, como ingenieros residentes, para garantizar que las labores industriales fueran llevadas a cabo de forma precisa y eficiente. Además, se realizaron trabajos de montaje de láminas y vigas estructurales, como las vigas IPR, que son esenciales para la integridad de la nave. A lo largo del proyecto, también se ejecutaron tareas de pintura, con el envío de pintores especializados para asegurar un acabado adecuado y duradero de las superficies. El trabajo fue realizado en una nave de 52,000 metros cuadrados, lo que implicó una logística considerable para poder habilitar todo el espacio de manera óptima, permitiendo que la nave cumpliera con los estándares industriales requeridos.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159083/VW_1_kmsubk.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159090/VW_2_kj62dd.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159098/VW_3_v6vo9v.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159107/VW_4_z118pp.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159122/VW_5_qcj9et.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158759/VW_6_okhmap.jpg"
        ]
      },
      {
        titulo: "Zacapotaxtla",
        descripcion: "Se realizó una serie de trabajos de construcción y habilitación para una bodega con oficinas en la parte superior. El trabajo comenzó con el tendido de concreto epóxico, que es esencial para garantizar una base resistente y duradera. Para la estructura metálica, se llevó a cabo la colocación de vigas utilizando grúas y personal capacitado, asegurando una correcta instalación y estabilidad. Además, se forró toda la nave con materiales como tablaroca Durock para crear divisiones dentro del espacio. Se instalaron persianas para brindar privacidad y control de luz en las oficinas. En cuanto a las instalaciones, se ejecutó una parte de la red de plomería, asegurando un sistema eficiente de agua y desagüe. También se realizó el cableado de voz y datos, lo que permitió habilitar el sistema de comunicación e internet necesario para las oficinas. Finalmente, se implementó una instalación de tierra física para garantizar la seguridad eléctrica del inmueble. Este conjunto de acciones permitió crear un espacio funcional y seguro tanto para las oficinas como para la bodega, cumpliendo con todos los requisitos técnicos necesarios.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159130/Zacapoaxtla_1_x5gfys.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159138/Zacapoaxtla_2_jkqejf.jpg"
        ]
      },
      {
        titulo: "Casa de Zavaleta",
        descripcion: "Se realizaron trabajos de instalación de domos, tanto de medio cañón como domos normales. Estos domos fueron diseñados para proporcionar una adecuada iluminación natural en el área de jardinería, mejorando la estética y funcionalidad del espacio. Además, algunos domos fueron instalados con ventilación para asegurar una circulación de aire adecuada, mientras que otros no contaban con ventilación, dependiendo de las necesidades específicas de cada área. El objetivo principal de los domos fue crear sombra en el jardín, protegiendo las plantas y áreas exteriores de la exposición directa al sol y ayudando a mitigar los efectos del clima, como la lluvia y el granizo. Para garantizar la durabilidad y seguridad de los domos, se construyó una estructura robusta que pudiera soportar el peso y las inclemencias del tiempo, asegurando la resistencia a factores climáticos adversos. Esta instalación mejoró tanto la funcionalidad del espacio como la protección de los jardines y áreas circundantes.",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159154/Zavaleta_1_bktsfo.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159161/Zavaleta_2_rsn4cf.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159146/Zavaleta_3_zanjbe.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769158753/Zavaleta_4_oumrb6.jpg"
        ]
      },
      {
        titulo: "Cholula",
        descripcion: "no se donde poner estas imagenes",
        imagenes: [
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159245/Cholula_1_rivkyx.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159253/Cholula_2_jqabyw.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159260/Cholula_3_n40gy4.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159275/Cholula_4_juixbg.jpg",
          "https://res.cloudinary.com/drotzbucj/image/upload/v1769159268/Cholula_5_ve6tsp.jpg"
        ]
      }
    ]
  }
];

export const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  
  // Lightbox scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!lightboxOpen) return;

    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
      }
    };

    // Initial check and setup
    checkScroll();
    // Small timeout to ensure rendering
    const timer = setTimeout(checkScroll, 100);

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [lightboxOpen, currentImages]);

  const scrollLightbox = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // 71.59px + 12px gap = 83.59px
      const scrollAmount = 83.59;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (images: string[], index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-0 py-8">
      {/* Tabs */}
      <div className="text-base font-medium text-center text-gray-500 border-b border-gray-200 mb-8">
        <ul className="flex flex-wrap -mb-px">
          {projectData.map((tab, index) => (
            <li key={index} className="me-2">
              <button
                onClick={() => setActiveTab(index)}
                className={`inline-block p-4 border-b-2 rounded-t-lg transition-colors duration-300 font-semibold tracking-tight uppercase ${
                  activeTab === index
                    ? 'text-orange-600 border-orange-600 active'
                    : 'text-[#313238] border-transparent hover:text-orange-600 hover:border-orange-600'
                }`}
              >
                {tab.titulo}
              </button>
            </li>
          ))}
          {/* Example disabled tab from user snippet, kept for reference if needed, otherwise removed for clean data-driven UI */}
        </ul>
      </div>

      {/* Content */}
      <div className="space-y-12">
        {projectData[activeTab].proyectos.map((proyecto, pIndex) => (
          <ProjectCard
            key={pIndex}
            proyecto={proyecto}
            openLightbox={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF5E14]/70 hover:bg-[#FF5E14] text-white transition-colors focus:outline-none"
            onClick={closeLightbox}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative flex-1 w-full max-w-7xl flex items-center justify-center min-h-0">
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 z-50 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF5E14]/70 hover:bg-[#FF5E14] text-white transition-colors focus:outline-none"
              onClick={prevImage}
            >
              <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={currentImages[currentImageIndex]}
              alt="Lightbox"
              className="max-h-full max-w-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            <button
              className="absolute right-4 z-50 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF5E14]/70 hover:bg-[#FF5E14] text-white transition-colors focus:outline-none"
              onClick={nextImage}
            >
              <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnails Carousel */}
          <div 
            className="w-full max-w-7xl mt-4 flex justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2 overflow-x-auto p-1 max-w-full [&::-webkit-scrollbar]:hidden">
              {currentImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`shrink-0 relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === idx 
                      ? 'border-[#FF5E14] scale-105' 
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
