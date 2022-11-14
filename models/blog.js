

const getAll_Blogs = () => {
    console.log('--------dentro de getAll_Blogs -------------');
    return db.query('select b.blog_titulo,b.blog_descripcion,a.autor_nombre from Blogs.Blogs as b join Blogs.Autores as a on b.blog_autor_id=a.autor_id;');
    }
const create_Blogs = ({blog_titulo,blog_descripcion,blog_categoria,blog_fecha_creacion,blog_autor_id}) => {
    console.log('--------dentro de create_Blogs -------------');

        return db.query(
        'insert into Blogs.Blogs (blog_titulo,blog_descripcion,blog_categoria,blog_autor_id) values (?,?,?,?)',
        [blog_titulo,blog_descripcion,blog_categoria,blog_autor_id]
        );
        }


module.exports = {getAll_Blogs,create_Blogs}