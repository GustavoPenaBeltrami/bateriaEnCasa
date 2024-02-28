const productos = [
  {
    "BCI": "H-22F-550",
    "VOLTAJE": "12 Voltios",
    "CA": "687 Amp",
    "CCA": "550 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "244",
    "ALTO": "207",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-22f-550-front-nac.png"
  },
  {
    "BCI": "H-24-600",
    "VOLTAJE": "12 Voltios",
    "CA": "750 Amp",
    "CCA": "600 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "221",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-24-600-front.png"
  },
  {
    "BCI": "H-24R-600",
    "VOLTAJE": "12 Voltios",
    "CA": "750 Amp",
    "CCA": "600 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "221",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-24r-600-front-nac.png"
  },
  {
    "BCI": "H-26R-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "85 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "220",
    "ALTO": "200",
    "ANCHO": "172",
    "IMAGEN": "HITEC/h-26r-500-front-nac.png"
  },
  {
    "BCI": "H-27-750",
    "VOLTAJE": "12 Voltios",
    "CA": "1012 Amp",
    "CCA": "810 Amp",
    "CR": "160 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-27-810-front-nacional.png"
  },
  {
    "BCI": "H-27F-810.",
    "VOLTAJE": "12 Voltios",
    "CA": "1012 Amp",
    "CCA": "810 Amp",
    "CR": "160 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-27f-810-front-nacional.png"
  },
  {
    "BCI": "H-34|78-800",
    "VOLTAJE": "12 Voltios",
    "CA": "1000 Amp",
    "CCA": "800 Amp",
    "CR": "115 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "203",
    "ANCHO": "186",
    "IMAGEN": "HITEC/h-34-78-800-front-nac.png"
  },
  {
    "BCI": "H-34-650",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278.13",
    "ALTO": "196.95",
    "ANCHO": "174.27",
    "IMAGEN": "HITEC/h-34-650-front-nacional.png"
  },
  {
    "BCI": "H-35-585",
    "VOLTAJE": "12 Voltios",
    "CA": "731 Amp",
    "CCA": "585 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "224",
    "ALTO": "224",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-35-585-front-nac.png"
  },
  {
    "BCI": "H-41-750",
    "VOLTAJE": "12 Voltios",
    "CA": "937 Amp",
    "CCA": "750 Amp",
    "CR": "130 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "297",
    "ALTO": "174",
    "ANCHO": "175",
    "IMAGEN": "HITEC/h-41-750-front.png"
  },
  {
    "BCI": "H-42-550",
    "VOLTAJE": "12 Voltios",
    "CA": "687 Amp",
    "CCA": "550 Amp",
    "CR": "95 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "175",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-42-550-front-nac.png"
  },
  {
    "BCI": "H-47(LN2)-600",
    "VOLTAJE": "12 Voltios",
    "CA": "750 Amp",
    "CCA": "600 Amp",
    "CR": "102 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "189",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-47-ln2-600-front-nac.png"
  },
  {
    "BCI": "H-48|91(LN3)-730",
    "VOLTAJE": "12 Voltios",
    "CA": "912 Amp",
    "CCA": "730 Amp",
    "CR": "115 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "277",
    "ALTO": "190",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-48_91ln3-730-front-nac.png"
  },
  {
    "BCI": "H-49(LN5)-850",
    "VOLTAJE": "12 Voltios",
    "CA": "1062 Amp",
    "CCA": "850 Amp",
    "CR": "150 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "352",
    "ALTO": "190",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-49ln5-850-front.png"
  },
  {
    "BCI": "H-58-650",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "253",
    "ALTO": "177",
    "ANCHO": "183",
    "IMAGEN": "HITEC/h-58-650-front.png"
  },
  {
    "BCI": "H-65-850",
    "VOLTAJE": "12 Voltios",
    "CA": "1062 Amp",
    "CCA": "850 Amp",
    "CR": "150 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "305",
    "ALTO": "189",
    "ANCHO": "190",
    "IMAGEN": "HITEC/h-65-850-front.png"
  },
  {
    "BCI": "H-75|86-700",
    "VOLTAJE": "12 Voltios",
    "CA": "875 Amp",
    "CCA": "700 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "245",
    "ALTO": "203",
    "ANCHO": "186",
    "IMAGEN": "HITEC/h-75_86-700-front.png"
  },
  {
    "BCI": "H-75-650",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "95 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "245",
    "ALTO": "186",
    "ANCHO": "184",
    "IMAGEN": "HITEC/h-75-650-front.png"
  },
  {
    "BCI": "H-78-800",
    "VOLTAJE": "12 Voltios",
    "CA": "1000 Amp",
    "CCA": "800 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "184",
    "ANCHO": "170",
    "IMAGEN": "HITEC/h-78-800-front.png"
  },
  {
    "BCI": "H-99(LBN1)-470",
    "VOLTAJE": "12 Voltios",
    "CA": "587 Amp",
    "CCA": "470 Amp",
    "CR": "65 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "HI-TEC",
    "GARANTIA": "60",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "206",
    "ALTO": "174",
    "ANCHO": "174",
    "IMAGEN": "HITEC/h-99(lbn1)-470-front.png"
  },
  {
    "BCI": "L-22F-450",
    "VOLTAJE": "12 Voltios",
    "CA": "562 Amp",
    "CCA": "450 Amp",
    "CR": "75 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "244",
    "ALTO": "207",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-22f-450-front-nac.png"
  },
  {
    "BCI": "L-24-420",
    "VOLTAJE": "12 Voltios",
    "CA": "525 Amp",
    "CCA": "420 Amp",
    "CR": "70 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "220",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-24-420-front.png"
  },
  {
    "BCI": "L-24-530",
    "VOLTAJE": "12 Voltios",
    "CA": "662 Amp",
    "CCA": "530 Amp",
    "CR": "90 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "220",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-24-530-front-nac.png"
  },
  {
    "BCI": "L-24R-530",
    "VOLTAJE": "12 Voltios",
    "CA": "662 Amp",
    "CCA": "530 Amp",
    "CR": "90 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "220",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-24r-530-front-nac.png"
  },
  {
    "BCI": "L-26R-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "85 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "220",
    "ALTO": "200",
    "ANCHO": "172",
    "IMAGEN": "LTH/l-26r-500-front-nac.png"
  },
  {
    "BCI": "L-27-700",
    "VOLTAJE": "12 Voltios",
    "CA": "875 Amp",
    "CCA": "700 Amp",
    "CR": "160 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-27-700-front-nac.png"
  },
  {
    "BCI": "L-27F-520",
    "VOLTAJE": "12 Voltios",
    "CA": "650 Amp",
    "CCA": "520 Amp",
    "CR": "102 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-27f-520-front-nac.png"
  },
  {
    "BCI": "L-27F-700",
    "VOLTAJE": "12 Voltios",
    "CA": "875 Amp",
    "CCA": "700 Amp",
    "CR": "160 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-27f-700-front-nac.png"
  },
  {
    "BCI": "L-34|78-750",
    "VOLTAJE": "12 Voltios",
    "CA": "937 Amp",
    "CCA": "750 Amp",
    "CR": "115 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "324",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-34-78-750-front-nac.png"
  },
  {
    "BCI": "L-34-600",
    "VOLTAJE": "12 Voltios",
    "CA": "750 Amp",
    "CCA": "600 Amp",
    "CR": "110 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "278",
    "ALTO": "197",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-34-600-front-nac.png"
  },
  {
    "BCI": "L-35-575",
    "VOLTAJE": "12 Voltios",
    "CA": "718 Amp",
    "CCA": "575 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "245",
    "ALTO": "223",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-35-575-front-nac.png"
  },
  {
    "BCI": "L-41-650",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "120 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "295",
    "ALTO": "174",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-41-650-front-nac.png"
  },
  {
    "BCI": "L-42-400",
    "VOLTAJE": "12 Voltios",
    "CA": "500 Amp",
    "CCA": "400 Amp",
    "CR": "70 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "175",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-42-400-front-nac.png"
  },
  {
    "BCI": "L-42-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "90 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "175",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-42-500-front-nac.png"
  },
  {
    "BCI": "L-42R-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "90 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "175",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-42r-500-front-nac.png"
  },
  {
    "BCI": "L-44B19-335",
    "VOLTAJE": "12 Voltios",
    "CA": "418 Amp",
    "CCA": "335 Amp",
    "CR": "55 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "187",
    "ALTO": "221",
    "ANCHO": "127",
    "IMAGEN": "LTH/l-44b19-335-front-nac.png"
  },
  {
    "BCI": "L-47(LN2)-550",
    "VOLTAJE": "12 Voltios",
    "CA": "687 Amp",
    "CCA": "550 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "241",
    "ALTO": "189",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-47-ln2-550-front-nac.png"
  },
  {
    "BCI": "L-48|91(LN3)-615",
    "VOLTAJE": "12 Voltios",
    "CA": "768 Amp",
    "CCA": "615 Amp",
    "CR": "95 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "277",
    "ALTO": "190",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-48-91ln3-615-front-nac.png"
  },
  {
    "BCI": "L-51-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "85 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "236",
    "ALTO": "220",
    "ANCHO": "127",
    "IMAGEN": "LTH/l-51-500-front-nac.png"
  },
  {
    "BCI": "L-51R-500",
    "VOLTAJE": "12 Voltios",
    "CA": "625 Amp",
    "CCA": "500 Amp",
    "CR": "85 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "236",
    "ALTO": "220",
    "ANCHO": "127",
    "IMAGEN": "LTH/l-51r-500-front-nac.png"
  },
  {
    "BCI": "L-58-575",
    "VOLTAJE": "12 Voltios",
    "CA": "718 Amp",
    "CCA": "575 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "254",
    "ALTO": "173",
    "ANCHO": "183",
    "IMAGEN": "LTH/l-58-575-front-nac.png"
  },
  {
    "BCI": "L-58R-575",
    "VOLTAJE": "12 Voltios",
    "CA": "718 Amp",
    "CCA": "575 Amp",
    "CR": "95 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "253",
    "ALTO": "177",
    "ANCHO": "183",
    "IMAGEN": "LTH/l-58r-575-front.png"
  },
  {
    "BCI": "L-65-800",
    "VOLTAJE": "12 Voltios",
    "CA": "1000 Amp",
    "CCA": "800 Amp",
    "CR": "150 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "305",
    "ALTO": "189",
    "ANCHO": "190",
    "IMAGEN": "LTH/l-65-800-front.png"
  },
  {
    "BCI": "L-75|86-650",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "93 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "245",
    "ALTO": "203",
    "ANCHO": "186",
    "IMAGEN": "LTH/l-75_86-650-front.png"
  },
  {
    "BCI": "L-75-575",
    "VOLTAJE": "12 Voltios",
    "CA": "718 Amp",
    "CCA": "575 Amp",
    "CR": "105 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "245",
    "ALTO": "185",
    "ANCHO": "185",
    "IMAGEN": "LTH/l-75-575-front-nac.png"
  },
  {
    "BCI": "L-94R-800",
    "VOLTAJE": "12 Voltios",
    "CA": "1000 Amp",
    "CCA": "800 Amp",
    "CR": "140 Minutos",
    "POLARIDAD": "Postes al Frente Izq/Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "314",
    "ALTO": "190",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-94r-800-front.png"
  },
  {
    "BCI": "L-99(LBN1)-400",
    "VOLTAJE": "12 Voltios",
    "CA": "500 Amp",
    "CCA": "400 Amp",
    "CR": "65 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "206",
    "ALTO": "174",
    "ANCHO": "174",
    "IMAGEN": "LTH/l-99(lbn1)-400-front.png"
  },
  {
    "BCI": "L-NS40-320",
    "VOLTAJE": "12 Voltios",
    "CA": "400 Amp",
    "CCA": "320 Amp",
    "CR": "55 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "187",
    "ALTO": "221",
    "ANCHO": "140",
    "IMAGEN": "LTH/l-ns40-320-front.png"
  },
  {
    "BCI": "L-NS40L-340",
    "VOLTAJE": "12 Voltios",
    "CA": "425 Amp",
    "CCA": "340 Amp",
    "CR": "55 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "187",
    "ALTO": "221",
    "ANCHO": "127",
    "IMAGEN": "LTH/l-ns40l-340-front.png"
  },
  {
    "BCI": "L-NS40Z-320",
    "VOLTAJE": "12 Voltios",
    "CA": "400 Amp",
    "CCA": "320 Amp",
    "CR": "55 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH",
    "GARANTIA": "48",
    "REEMPLAZOS_COSTO": "12",
    "LARGO": "187",
    "ALTO": "221",
    "ANCHO": "127",
    "IMAGEN": "LTH/l-ns40z-320-front-nac.png"
  },
  {
    "BCI": "L-24F-710 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "888 Amp",
    "CCA": "710 Amp",
    "CR": "120 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "278.13",
    "ALTO": "219.26",
    "ANCHO": "173.87",
    "IMAGEN": "AGM/lth_auto_agm_24f-710_front.png"
  },
  {
    "BCI": "L-31T-825 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "1031 Amp",
    "CCA": "825 Amp",
    "CR": "200 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "330",
    "ALTO": "237",
    "ANCHO": "172",
    "IMAGEN": "AGM/lth_sp_agm_31t-825_front.png"
  },
  {
    "BCI": "L-35-650 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "812 Amp",
    "CCA": "650 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "245",
    "ALTO": "225",
    "ANCHO": "171",
    "IMAGEN": "AGM/lth_auto_agm_35-650_front.png"
  },
  {
    "BCI": "L-47-660 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "825 Amp",
    "CCA": "660 Amp",
    "CR": "100 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "241",
    "ALTO": "189",
    "ANCHO": "174",
    "IMAGEN": "AGM/lth_auto_agm_47-660_front.png"
  },
  {
    "BCI": "L-48|91-760 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "950 Amp",
    "CCA": "760 Amp",
    "CR": "120 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "278",
    "ALTO": "190",
    "ANCHO": "175",
    "IMAGEN": "AGM/lth_auto_agm_48-91-760_front.png"
  },
  {
    "BCI": "L-49-900 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "1125 Amp",
    "CCA": "900 Amp",
    "CR": "160 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "352.5",
    "ALTO": "189.5",
    "ANCHO": "174.8",
    "IMAGEN": "AGM/lth_auto_agm_49-900_front.png"
  },
  {
    "BCI": "L-65-750 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "938 Amp",
    "CCA": "750 Amp",
    "CR": "120 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (+) / (-)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "305.31",
    "ALTO": "188.24",
    "ANCHO": "189.36",
    "IMAGEN": "AGM/lth_auto_agm_65-750_front.png"
  },
  {
    "BCI": "L-94R(LN4)-850 AGM",
    "VOLTAJE": "12 Voltios",
    "CA": "1062 Amp",
    "CCA": "850 Amp",
    "CR": "140 Minutes",
    "POLARIDAD": "Postes al frente Izq / Der: (-) / (+)",
    "MARCA": "LTH AGM",
    "GARANTIA": "72",
    "REEMPLAZOS_COSTO": "24",
    "LARGO": "315",
    "ALTO": "190",
    "ANCHO": "175",
    "IMAGEN": "AGM/lth_auto_agm_94r-850_front.png"
  }
]

export default productos;