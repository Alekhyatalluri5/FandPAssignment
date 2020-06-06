import React from 'react';
import {
  Select,
  Radio,
  Button,
  Form,
  Menu,
  Collapse,
  Modal,
  Input,
  Checkbox,
  List,
  Tabs,
  DatePicker,
} from 'antd';
import CountUp from 'react-countup';
export const SelectOption = Select.Option;
export const RadioGroup = Radio.Group;
export const RadioButton = Radio.Button;
export const ButtonGroup = Button.Group;
export const FormItem = Form.Item;
export const MenuItem = Menu.Item;
export const MenuSubMenu = Menu.SubMenu;
export const MenuDivider = Menu.Divider;
export const CollapsePanel = Collapse.Panel;
export const ModalConfirm = Modal.confirm;
export const InputGroup = Input.Group;
export const InputTextArea = Input.TextArea;
export const CheckboxGroup = Checkbox.Group;
export const ListItem = List.Item;
export const ListItemMeta = ListItem.Meta;
export const TabsTabPane = Tabs.TabPane;
export const DateRangePicker = DatePicker.RangePicker;

export const CurrencySymbols = {
  USD: '$', // US Dollar
  EUR: '€', // Euro
  GBP: '£', // British Pound Sterling
  ILS: '₪', // Israeli New Sheqel
  INR: '₹', // Indian Rupee
  JPY: '¥', // Japanese Yen
  KRW: '₩', // South Korean Won
  NGN: '₦', // Nigerian Naira
  PHP: '₱', // Philippine Peso
  PLN: 'zł', // Polish Zloty
  PYG: '₲', // Paraguayan Guarani
  THB: '฿', // Thai Baht
  UAH: '₴', // Ukrainian Hryvnia
  VND: '₫', // Vietnamese Dong
};
export const MathRoundOff = ValueNumber => (
  <CountUp
    end={Number(ValueNumber)}
    duration={0.5}
    decimals={2}
    decimal="."
    prefix={CurrencySymbols.INR}
  />
);

//   Number(Math.round(Number(ValueNumber) * 100) / 100);
