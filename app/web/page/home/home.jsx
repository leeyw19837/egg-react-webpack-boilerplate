import React, { Component } from 'react';
import request from 'framework/request';
import Layout from 'component/layout/default';
import Header from 'component/header'
import '../../asset/css/blog.css'

import './home.css'
export default class Home extends Component {
  static asyncData(locals) {
    return request.get('/api/list', locals).then(res => {
      return res.data;
    });
  }

  render() {
    const { list } = this.props;
    return <Layout {...this.props}>
      <Header></Header>
      <div className="easy-article-list">
        <ul>
          {list.map(function (item) {
            return <li key={item.id} className="easy-article-item">
              <h2 className="easy-article-title"><a href={'/detail/' + item.id} target="_blank">{item.title}</a></h2>
              <div className="easy-article-summary">{item.summary}</div>
              <div className="easy-article-meta">
                <span>11Word Count:{item.wordCount}  </span>
                <span>Create Time: {item.createTime}</span>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </Layout>;
  }
}