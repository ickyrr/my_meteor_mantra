import React from 'react';
import CommentList from '../../comments/containers/comment_list'
import {
  Col,
  PageHeader,
  Row,
} from 'react-bootstrap'

class PostSingle extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div>
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <a href={ FlowRouter.path( 'posts.list' ) }>&lt; Back</a>
            <PageHeader>
              { post.title }
            </PageHeader>
            <p><strong>{ post.author }</strong> - { post.createdAt.toLocaleDateString() }</p>
            <p>{ post.content }</p>
          </Col>
        </Row>
        <CommentList postId={ post._id } />
      </div>
    )
  }
}

export default PostSingle
