import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import config from "../../../data/SiteConfig";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
      hover: false
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {    

    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    var coverHeight = mobile ? 162 : 225;
    // var linkStyle;
    // linkStyle = {
    //   textDecoration: "none"
    // }
    // if (this.state.hover) {
    //   console.log(postInfo.cover);
    //   linkStyle = {background: `url(${myImageUrl})`};
    // } else {
    //   // linkStyle = {background: 'white'}
    //   linkStyle = {background: `url(${myImageUrl})`};
    // }

    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--6"
                  // style={linkStyle} onMouseOver={()=>{this.setState({hover: true})}} onMouseLeave={()=>{this.setState({hover: false})}}
                  >
        <Link style={{ textDecoration: "none", color: "black"}} to={postInfo.path}>
          {/* <Media style={{ height: coverHeight, paddingBottom: "0px" }}> */}
            {/* <PostCover postNode={postInfo} coverHeight={coverHeight} /> */}
          {/* </Media> */}
          <CardTitle title={postInfo.title}
                    subtitle={`${moment(postInfo.date).format(
                      config.dateFormat
                    )}`} />
          <CardText expandable={expand}>
            {postInfo.excerpt}({postInfo.timeToRead} min read)
            <PostTags tags={postInfo.tags} />
          </CardText>
          {/* <Button raised secondary className="md-cell--right">
            Read
          </Button> */}
        </Link>
      </Card>
    );
  }
}

export default PostPreview;
