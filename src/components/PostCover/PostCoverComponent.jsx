import React, { Component } from "react";
import Img from "gatsby-image";
import path from "path";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { fileEdges, postNode, coverHeight, coverClassName } = this.props;
    const post = postNode.frontmatter ? postNode.frontmatter : postNode;
    const imgHeight = post.cover ? coverHeight : 0;
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false;

      if (
        fileNode.node.absolutePath.indexOf(
          path.join("/static/assets/", post.cover)
        ) !== -1
      )
        return true;

      return false;
    });
    
    var imgStyle = {
      height: imgHeight, 
      width: "100%"
    }

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          outerWrapperClassName={coverClassName}
          style={imgStyle}
        />
      );
    }

    /* eslint no-undef: "off" */
    const coverURL =
      post.cover.substring(0, 1) === "/"
        ? __PATH_PREFIX__ + post.cover
        : post.cover;
    return (
      <div
        style={{
          backgroundImage: `url(${coverURL})`,
          height: `${imgHeight}px`
        }}
        className={coverClassName}>
      </div>
    );
  }
}

export default PostCover;
