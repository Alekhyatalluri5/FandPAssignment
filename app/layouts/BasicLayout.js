import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu, Dropdown } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen, unenquireScreen } from '../utils/enquireHelper';
import GlobalFooter from '../components/GlobalFooter';
import SideMenu from '../components/SideMenu';
import { getMenuData } from '../common/menu';
import styles from './PageHeaderLayout.less';
import TitleLogo from '../images/titlelogo.png';
import Bell from '../images/bell.png';
import User from '../images/user.png';
import Calendar from '../images/calendar.png';
// import { getCurrentUser } from '../utils/user';
// import OrganizationType from '../pages/Components/OrganizationType/organizationType';

const { Content, Header, Footer } = Layout;
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="/">
//         Profile
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="/">
//         Organization Setup
//       </a>
//       {/* <link></link> */}
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="/">
//         Logout
//       </a>
//     </Menu.Item>
//   </Menu>
// );

class BasicLayout extends PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  state = {
    isMobile,
    collapsed: false,
    pageTitle: '',
    // currentUser: {},
  };

  getChildContext() {
    return {
      location,
      breadcrumbNameMap: {},
    };
  }

  // componentDidMount() {
  //   this.setState({ currentUser: getCurrentUser() });
  //   this.enquireHandler = enquireScreen(mobile => {
  //     this.setState({
  //       isMobile: mobile,
  //     });
  //   });
  //   // if (window.location.pathname == '/bnc') {
  //   //   location.replace('/bnc/Bookings');
  //   // }
  // }

  // componentWillUnmount() {
  //   unenquireScreen(this.enquireHandler);
  // }

  getPageTitle() {
    return this.state.pageTitle;
  }

  getBaseRedirect = () => {
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const { routerData } = this.props;
      // get the first authorized route path in routerData
      const authorizedPath = Object.keys(routerData).find(
        item =>
          check(routerData[item].authority, item) &&
          item !== '/dashboard/areaAvailability/',
      );
      return authorizedPath;
    }
    return redirect;
  };

  handleMenuCollapse = collapsed => {
    this.setState({ collapsed });
  };

  // all Side Nav Menu based Routes
  getNavMenuRoutes = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData.map(item => {
      if (item.children && item.children.some(child => child.name)) {
        return item.children.map(item => (
          <Route path={item.path} component={item.component} key={item.name} />
        ));
      }
      return (
        <Route path={item.path} component={item.component} key={item.name} />
      );
    });
  };
  render() {
    // const { fetchingNotices, notices, location } = this.props;
    // const currentUser = this.state.currentUser;
    // const routerData = {};

    const { isMobile: mb } = this.state;
    const layout = (
      <Layout>
        <Header className={styles.basicLayoutHeader}>
          <Link to="/dashboard">
            {/* <img src={TitleLogo} alt="logo" className={styles.logoLink} /> */}
          </Link>
          <SideMenu
            menuData={getMenuData()}
            collapsed={this.state.collapsed}
            location={location}
            isMobile={mb}
            onCollapse={this.handleMenuCollapse}
          />
        </Header>
        <Content className={styles.basicLayoutContent}>
          <Switch>{this.getNavMenuRoutes(getMenuData())}</Switch>
        </Content>
        <Footer className={styles.basicLayoutFooter}>
          {/* <GlobalFooter
            copyright={
              <Fragment>
                Copyright Staffjoy <Icon type="copyright" /> 2019 - 2020
              </Fragment>
            }
          /> */}
        </Footer>
      </Layout>
    );
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.getPageTitle()}</title>
        </Helmet>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </Fragment>
    );
  }
}

export default connect(() => ({
  currentUser: {},
  notices: [],
  routerData: {},
}))(BasicLayout);
