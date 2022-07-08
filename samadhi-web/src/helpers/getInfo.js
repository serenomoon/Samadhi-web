export const getClases = async() => {
  const url = 'http://127.0.0.1:8000/api/clasesdata/'
  const resp = await fetch( url );
  const { data } = await resp.json();

  const clases = data.map( info => {
    return {
      type: info.type,
      id: info.id,
      title: info.attributes.title,
      mensaje: info.attributes.mensaje,
      date: info.attributes.date,
      time: info.attributes.time,
      uploadimg: info.attributes.uploadimg,
      facilitadores: info.attributes.facilitadores,
      alumnos: info.attributes.alumnos,
    }
  })
  return clases;
  
};

export const getNoticias = async() => {
  const url = 'http://127.0.0.1:8000/api/noticiasdata/'
  const resp = await fetch( url );
  const { data } = await resp.json();

  const noticias = data.map( info => {
    return {
      type: info.type,
      id: info.id,
      title: info.attributes.title,
      mensaje: info.attributes.mensaje,
      date: info.attributes.date,
      time: info.attributes.time,
      uploadimg: info.attributes.uploadimg,
    }
  })
  return noticias;
  
};

export const getFacilitadores = async() => {
  const url = 'http://127.0.0.1:8000/api/facilitadoresdata/'
  const resp = await fetch( url );
  const { data } = await resp.json();

  const facilitadores = data.map( info => {
    return {
      type: info.type,
      id: info.id,
      name: info.attributes.name,
      lastname: info.attributes.lastname,
      address: info.attributes.address,
      telephone: info.attributes.telephone,
      activity: info.attributes.activity,
      bio: info.attributes.bio,
      service: info.attributes.service,
      clase: info.attributes.clase,
      date: info.attributes.date,
      time: info.attributes.time,
      uploadimg: info.attributes.uploadimgname,
    }
  })
  return facilitadores;
  
};

export const getAlumnos = async() => {
    const url = 'http://127.0.0.1:8000/api/alumnosdata/'
    const resp = await fetch( url );
    const { data } = await resp.json();

    const alumnos = data.map( info => {
      return {
        type: info.type,
        id: info.id,
        name: info.attributes.name,
        lastname: info.attributes.lastname,
        email: info.attributes.email,
        address: info.attributes.address,
        telephone: info.attributes.telephone,
        clase: info.attributes.clase,
        date: info.attributes.date,
        time: info.attributes.time,
      }
    })
    return alumnos;
    
  };

  export const getAlumnosId = async(id) => {
    const url = `http://127.0.0.1:8000/api/alumnosdata/${id}/`
    const resp = await fetch( url );
    const { data } = await resp.json();
    return data;

  };

  export const getFacilitadoresId = async(id) => {
    const url = `http://127.0.0.1:8000/api/facilitadoresdata/${id}/`
    const resp = await fetch( url );
    const { data } = await resp.json();
    return data;

  };

  export const getClasesId = async(id) => {
    const url = `http://127.0.0.1:8000/api/clasesdata/${id}/`
    const resp = await fetch( url );
    const { data } = await resp.json();
    return data;

  };

  export const getNoticiasId = async(id) => {
    const url = `http://127.0.0.1:8000/api/noticiasdata/${id}/`
    const resp = await fetch( url );
    const { data } = await resp.json();
    return data;

  };

