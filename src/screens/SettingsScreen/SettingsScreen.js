import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {switchTheme} from "../../store/actions";
import {StyleSheet} from "react-native";
import {Divider, Text, Layout, Icon, Toggle, IndexPath, Select, SelectItem} from '@ui-kitten/components';

const SettingsScreen = () => {
  const [checked, setChecked] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if (theme === 'light') {
      dispatch(switchTheme('dark'));
    } else {
      dispatch(switchTheme('light'));
    }
  };
  return (
    <Layout style={styles.container} level='2'>
      <Layout style={styles.layout} level='2'>
        <Icon
          style={styles.icon}
          fill='#8F9BB3'
          name={theme === 'light' ? 'sun-outline' : 'moon-outline'}
        />
        <Text style={{flex: 1}}>Theme {theme}</Text>
        <Toggle checked={checked} onChange={onCheckedChange} status='info'/>
      </Layout>
      <Divider/>
      <Layout style={styles.layout} level='2'>
        <Icon
          style={styles.icon}
          fill='#8F9BB3'
          name='globe-outline'
        />
        <Text >Language</Text>
        <Select
          style={{flex: 1, marginLeft: 20}}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <SelectItem title='English'/>
          <SelectItem title='Russian'/>
          <SelectItem title='German'/>
        </Select>
      </Layout>
      <Divider/>
      <Layout style={styles.layout} level='2'>
        <Icon
          style={styles.icon}
          fill='#8F9BB3'
          name='lock-outline'
        />
        <Text >Reset password</Text>

      </Layout>
      <Divider/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 14
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 20
  },
});

export default SettingsScreen;
