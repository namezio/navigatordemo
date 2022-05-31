import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {getContact} from '../redux/action/Contact';
import {useFocusEffect} from '@react-navigation/native';

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
];

function Participants() {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  async function getCon() {
    const response = await dispatch(getContact());
    if (response.error) {
      return;
    }
  }
  useFocusEffect(
    useCallback(() => {
      getCon();
    }, []),
  );
  const contacts = useSelector(state => state.contact.contacts).map(x => ({
    item: x.name,
    id: x.id,
  }));
  const value = selectedTeams.map(({id}) => id.toString());
  console.log(value);
  return (
    <View style={{margin: 30}}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={{fontSize: 30, paddingBottom: 20}}>Demos</Text>
      </View>
      <Text style={{fontSize: 20, paddingBottom: 10}}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={contacts}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
      <Text>abcdddddddweaqead</Text>
    </View>
  );

  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

  function onChange() {
    return val => setSelectedTeam(val);
  }
}
export default Participants;
