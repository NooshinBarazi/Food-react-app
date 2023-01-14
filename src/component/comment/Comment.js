import './comment.css';
import img1 from '../../assets/images/Group 7.png';
import { comments } from '../../data';

const Comment = () => {
    return ( 
        <section className='comment'>
            <div className='comment-img'>
                <img src={img1}/>
            </div>
            <div className='customers'>
                <div className='customers-text'>
                    <span>What the say</span>
                    <h3>What Our Customers Say About Us</h3>
                </div>
                <div className='customers-comment'>
                    {comments.map(comment =>(
                        <div className='comment-box'>
                            <div>
                                <img src={comment.image}/>
                                <div>
                                    <h4>{comment.name}</h4>
                                </div>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Comment;