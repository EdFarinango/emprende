const contacts = [
    {
      name: "Abraham Loja",
      imgUrl:
        "https://media.licdn.com/dms/image/C4D03AQFIEFFYAV3xow/profile-displayphoto-shrink_800_800/0/1547767221383?e=2147483647&v=beta&t=yJrVylsYczDK7vggdoUgA1kLMwCi0Hna4fVsDBRMTVg",
        descripcion: "Docente",
      email: "abraham.loja@epn.edu.ec"
    },
    {
      name: "Verónica Morales",
      imgUrl:
        "https://esfot.epn.edu.ec/images/fotos_docentes/veronica_morales.jpeg",
        descripcion: "Docente",
      email: "veronica.morales@epn.edu.ec"
    },
    {
      name: "Juan Pablo Zaldumbide",
      imgUrl:
        "data:image/jpeg;base64,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",
        descripcion: "Docente",
      email: "juan.zaldumbide@epn.edu.ec"
    },
    {
      name: "Elizabeth Armas",
      imgUrl:
        "https://esfot.epn.edu.ec/images/fotos_docentes/elizabeth_armas.jpeg",
      descripcion: "Docente",
      email: "elizabeth.armas@epn.edu.ec"
    },
    {
      name: "Aracely Yandún",
      imgUrl: "https://i1.rgstatic.net/ii/profile.image/1173016520212482-1656680340860_Q512/Aracely-Yandun.jpg",
      descripcion: "Docente",
      email: "aracely.yandun@epn.edu.ec"
    }
  ];
  
  export default contacts;
  