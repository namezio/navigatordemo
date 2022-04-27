import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import GradientText from '../component/GradientText';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {useDispatch, useSelector} from 'react-redux';
import {setData} from '../redux/action/InitAddSchedule';
import * as dialogAction from '../redux/action/Dialog';
import {Add} from '../redux/action/AddSchedule';
import DropDownPicker from 'react-native-dropdown-picker';
import {setCareer} from '../redux/action/SignUp';

function AddCalendar() {
  const [date, setDate] = useState(new Date());
  const [timeEnd, setEnd] = useState(new Date());
  const [timeStart, setStart] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const [openRoom, setOpenRoom] = useState(false);
  const [openHost, setOpenHost] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  async function showRoomHost() {
    const response = await dispatch(setData());
    if (response.error) {
      return;
    }
    console.log(response.data);
  }
  useState(() => {
    showRoomHost();
  }, []);
  const initAdd = useSelector(state => state.initAdd);
  const hosts = useSelector(state => state.initAdd.hosts).map(x => ({
    value: x.id,
    label: x.name,
  }));
  console.log('HOST', hosts);
  const defaultValues = {
    name: '',
    timeStart: '',
    timeEnd: '',
    startDate: '',
    endDate: '',
    meetingId: '',
    isRecurring: false,
    days: [0],
    idParticipants: [],
    isOnHostVideo: true,
    isOnParticipantVideos: true,
    isOnDingDongSound: true,
    isUsePassCode: false,
    passCode: '',
    isBlocked: false,
    idHost: 0,
  };
  const schema = yup.object().shape({
    name: yup.string().required('validate.required'),
    timeStart: yup.string().required('validate.required'),
    timeEnd: yup.string().required('validate.required'),
    startDate: yup.string().required('validate.required'),
    endDate: yup.string().required('validate.required'),
    meetingId: yup.string().required('validate.required'),
    idHost: yup.number().required('validate.required'),
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const submit = async data => {
    dispatch(dialogAction.showLoading());
    const result = await dispatch(Add(data));
    dispatch(dialogAction.dismissLoading());

    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
        Alert.alert(result.message),
      );
      return;
    }
    Alert.alert(result.message);
    dispatch(navigation.goBack());
  };
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#09bcc8',
          marginBottom: 10,
        }}>
        Tạo lịch họp
      </GradientText>
      <Text style={styles.text}>Tên lịch họp</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />

      <Text style={styles.text}>Thời gian họp</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => setOpenStart(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeStart).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={openStart}
          date={timeStart}
          onConfirm={timeStart => {
            setOpenStart(false);
            setStart(timeStart);
            console.log(dayjs(timeStart).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenStart(false);
          }}
        />
        <TouchableOpacity style={{flex: 1}} onPress={() => setOpenEnd(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeEnd).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={openEnd}
          date={timeEnd}
          onConfirm={timeEnd => {
            setOpenEnd(false);
            setEnd(timeEnd);
            console.log(dayjs(timeEnd).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenEnd(false);
          }}
        />
      </View>
      <Text style={styles.text}>Ngày họp</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={openDate}
          date={date}
          onConfirm={date => {
            setOpenDate(false);
            setDate(date);
            console.log(dayjs(date).format('HH:mm'));
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
      </View>
      <Text style={styles.text}>Phòng họp</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />
      <Text style={styles.text}>Chủ Tọa</Text>
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <DropDownPicker
            stickyHeader={true}
            autoScroll={true}
            style={styles.textinput}
            open={openRoom}
            value={value}
            items={hosts}
            setOpen={setOpenRoom}
            setValue={onChange}
            setItems={hosts.name}
            onChangeValue={onChange}
            onPress={() => {
              dispatch(setCareer(value));
              console.log(value);
            }}
          />
        )}
        name="idCareer"
      />
      <ButtonGradient text={'Tạo lịch'} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
  },
  text2: {
    fontSize: 15,
    marginTop: 5,
    color: '#65c1b6',
  },
});
export default AddCalendar;
