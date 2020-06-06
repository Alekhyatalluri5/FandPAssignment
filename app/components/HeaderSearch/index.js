import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';
import { connect } from 'react-redux';
// import Bind from 'lodash-decorators/bind';
import styles from './index.less';

class HeaderSearch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
    defaultOpen: PropTypes.bool,
  };

  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    className: '',
    placeholder: '',
    dataSource: [],
    defaultOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchMode: props.defaultOpen,
      value: '',
      tableListData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps1', nextProps.data);
    this.setState(
      {
        tableListData: nextProps.data,
      },
      () => {
        // console.log('tableListData', this.state.tableListData);
      },
    );
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.debouncePressEnter();
    }
  };

  onChange = value => {
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    }
  };

  enterSearchMode = () => {
    console.log('jfhjfghjg')
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state;
      if (searchMode) {
        this.input.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  };

  debouncePressEnter() {
    const { onPressEnter } = this.props;
    const { value } = this.state;
    onPressEnter(value);
  }

  getSearchData = data => {
    if (data.length != 0) {
      data = this.state.value;
      console.log('Enter data', data);
      const searchValues = this.state.tableListData.filter(
        row =>
          row.festivalType.toLowerCase().includes(data.toLowerCase()) ||
          row.day.toLowerCase().includes(data.toLowerCase()) ||
          row.date.toLowerCase().includes(data.toLowerCase()),
      );
      console.log('searchValues', searchValues);
      this.props.setFilter(searchValues, this.state.value);
    } else {
      this.setState({ tableListData: this.state.tableListData });
    }
  };

  render() {
    const { className, placeholder, ...restProps } = this.props;
    const { searchMode, value } = this.state;
    delete restProps.defaultOpen; // for rc-select not affected
    const inputClass = classNames(styles.input, {
      [styles.show]: searchMode,
    });

    return (
      <span
        className={classNames(className, styles.headerSearch)}
        onClick={this.enterSearchMode}
      >
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
            onPressEnter={this.getSearchData}
          />
        </AutoComplete>
        <Icon type="search" key="Icon" />
      </span>
    );
  }
}
export default connect(({ holidays }) => ({
  data: holidays.reducerList || [],
}))(HeaderSearch);
