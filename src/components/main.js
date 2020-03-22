import React, { Component } from 'react';
import SectionAboutMe from './modules/sectionAboutMe';
import SectionBlogPosts from './modules/sectionBlogPosts';
import SectionProjects from './modules/sectionProjects';

class Main extends Component {
  state = {
    blogPosts: [
      {
        id: 1,
        link: 'https://dockyard.com/blog/2019/12/05/know-the-code-how-design-and-engineering-team-up-for-design-qa',
        title: 'Know the Code: How Design and Engineering Team Up for Design QA',
        dateTime: '2019-12-05T18:03:08.082Z',
        date: 'December 5, 2019'
      },
      {
        id: 2,
        link: 'https://dockyard.com/blog/2019/04/17/narwin-grid-harmony-between-css-grid-and-data-attributes',
        title: 'narwin-grid: Harmony Between CSS Grid and Data Attributes',
        dateTime: '2019-04-17T16:20:44.288Z',
        date: 'April 17, 2019'
      },
      {
        id: 3,
        link: 'https://dockyard.com/blog/2017/08/01/svg-assets-in-pwas',
        title: 'SVG Assets in PWAs',
        dateTime: '2017-08-01T08:00:00.000Z',
        date: 'August 1, 2017'
      },
      {
        id: 4,
        link: 'https://dockyard.com/blog/2016/05/27/narwin-pack-the-postcss-package',
        title: 'Narwin-Pack: A PostCSS Package for DRY and Efficient CSS',
        dateTime: '2016-05-27T04:00:00.000Z',
        date: 'May 27, 2016'
      },
      {
        id: 5,
        link: 'https://dockyard.com/blog/2016/02/11/transition-to-postcss',
        title: 'Why DockYard transitioned to PostCSS',
        dateTime: '2016-02-11T05:00:00.000Z',
        date: 'February 11, 2016'
      },
      {
        id: 6,
        link: 'https://dockyard.com/blog/2015/09/02/clear-communication-through-html',
        title: 'Clear communication through HTML and GitHub',
        dateTime: '2015-09-02T04:00:00.000Z',
        date: 'September 2, 2015'
      },
      {
        id: 7,
        link: 'https://dockyard.com/blog/2015/03/16/thriving-in-a-new-work-environment',
        title: 'Thriving in a New Work Environment',
        dateTime: '2015-03-16T04:00:00.000Z',
        date: 'March 16, 2015'
      }
    ],
    projects: [
      {
        id: 1,
        link: 'https://bitratecalc.com',
        imgURL: './images/bitratecalc.jpg',
        alt: 'Bitrate Calc side project',
        name: 'Bitratecalc.com'
      },
      {
        id: 2,
        link: 'https://personaltodo.com/',
        imgURL: './images/personaltodo.jpg',
        alt: 'Personal TODO side project',
        name: 'Personaltodo.com (WIP)'
      }
    ]
  }

  render () {
    return (
      <main className="main">
        <SectionAboutMe />
        <SectionBlogPosts posts={this.state.blogPosts}/>
        <SectionProjects projects={this.state.projects}/>
      </main>
    )
  }
}

export default Main;