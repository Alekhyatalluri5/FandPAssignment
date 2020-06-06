import React from "react";
import axios from "axios";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { connect } from "react-redux";
import { Rate } from 'antd';



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      favouriteItems: [],
    };
  }
  static getDerivedStateFromProps(nextProps) {
    console.log(nextProps.data, "nex")
  }
  // this is using axios, without axios we can use redux format by passing the state of store
  componentDidMount() {
    axios.get("http://www.mocky.io/v2/5ed68221340000480106dae9").then((res) => {
      console.log(res);

      this.setState({
        posts: res.data,
      });
    });
    this.props.dispatch({
      type: 'cakes/actionSample',
      payload: {
        favouriteItems: this.state.favouriteItems
      }
    })
    const abc = localStorage.getItem('selectedState');
    if(!!abc) {
      let res = abc.split(",");
      this.setState({
        favouriteItems: res
      })   
    }                                 
  }
  handleClick = (postId) => {
    if (this.state.favouriteItems.indexOf(postId) == -1) {
      this.setState({ favouriteItems: [...this.state.favouriteItems, postId] },() => {
          localStorage.setItem( 'selectedState', [this.state.favouriteItems] );
      })
    } else {
      const array1 = this.state.favouriteItems.filter((id) => id != postId);
      this.setState({ favouriteItems: array1 }, () => {
       
          localStorage.setItem( 'selectedState',  [this.state.favouriteItems]); 
    
  })
}
  };

  render() {
    const { favouriteItems } = this.state;
    console.log(favouriteItems, "items");
    console.log(this.props.data, "data");


    const mystyle = {
      display: "flex",
      flexDirection: 'row',
      overflow: 'scroll',
      flexWrap: 'wrap'
    };
    const imgStyle = {
      position: 'relative',
      width: '300px',

    }
    const icon = {
      position: 'absolute',
      top: '2px',
      right: '92px',
      zIndex: "1"
    };
    const offStyle = {
      color: 'green',
      paddingLeft: '6px'
    }

    const postList = this.state.posts.length ? (
      this.state.posts.map((post) => {
        return (
          <div
            className="post-card"
            style={{ marginTop: "60px" }}
            key={post.sku}
          >
            <div className="card-content">
              <div style={imgStyle} >
                <img src={post.imgSrc} />
                <div style={icon}>
                  {favouriteItems.indexOf(post.sku) != -1 ? (
                    <BsFillHeartFill
                      color={"green"}
                      size={"2em"}
                      onClick={() => {
                        this.handleClick(post.sku);
                      }}
                    />
                  ) : (
                      <BsHeart
                        size={"2em"}
                        onClick={() => {
                          this.handleClick(post.sku);
                        }}
                      />
                    )}
                </div>
              </div>
              <h6 style={{ paddingLeft: '6px', paddingBottom: '1px', paddingTop: '3px' }}>{post.title}</h6>
              <h2 style={{ paddingLeft: '13px' }}>₹{post.sellingPrice * 0.85}</h2>
              <span style={offStyle}>15% OFF</span>  <span style={{ textDecoration: 'line-through' }}>{post.sellingPrice}</span>
              <div>
                <span style={{ color: 'yellow', paddingLeft: '6px' }}><Rate value={post.ratingCount} allowHalf="true" defaultValue={2.5} />{post.ratingCount}</span>
                <span>  {post.reviewCount} Reviews </span>
              </div>
            </div>
          </div>
        );
      })
    ) : (
        <div>No posts</div>
      );

    return <div style={mystyle}>{postList}</div>;
  }
}

export default connect(({ cakes }) => ({
  data: cakes.sampleData || {},
}))(Home);
