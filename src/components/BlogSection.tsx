import Image from 'next/image';
import blogData from '@/properties/blog.json';
import { getAssetPath } from '@/utils/asset';

const BlogSection = () => {
  return (
    <section id="blog" className="py-5 bg-light">
      <div className="container">
        <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">{blogData.title}</h2>
        <div className="row">
          {blogData.posts.map((post, index) => (
            <div className="col-md-4 mb-4" key={post.title}>
              <a href="#" className="card h-100">
                <Image
                  src={getAssetPath(post.image)}
                  className="card-img-top"
                  alt={post.title}
                  width={400}
                  height={300}
                />
                <div className="card-body">
                  <h3 className="card-title fs-5">{post.title}</h3>
                  <p className="card-text">{post.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
