
const getAll_Autores = () => {
    console.log('--------dentro de getAll_Autores -------------');

    return db.query('select * from Blogs.Autores');
    }
    
const getAll_PostsOfAutor = (autorid) => {
    console.log('--------dentro de getAll_PostsOfAutor -----------autor_id--',autorid);

    return db.query('select b.blog_titulo,b.blog_descripcion,a.autor_nombre from Blogs.Blogs as b join Blogs.Autores as a on b.blog_autor_id=a.autor_id where b.blog_autor_id = ?',[autorid]);
    }

const create_Autores = ({autor_nombre}) => {
    console.log('--------dentro de create_Autores -------------');

        return db.query(
        'insert into Blogs.Autores (autor_id, autor_nombre) values (?, ?)',
        [null, autor_nombre]
        );
        }

module.exports = {getAll_Autores,create_Autores,getAll_PostsOfAutor}



  
