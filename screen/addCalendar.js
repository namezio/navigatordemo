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
  Switch,
} from 'react-native';
import GradientText from '../component/GradientText';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {initData} from '../redux/action/InitAddSchedule';
import {AddSchedule, getInit, setRoom} from '../redux/action/AddSchedule';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as dialogAction from '../redux/action/Dialog';
import DropDownPicker from 'react-native-dropdown-picker';

function AddCalendar() {
  const [date, setDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [timeEnd, setEnd] = useState(new Date());
  const [timeStart, setStart] = useState(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [openDate, setOpenDate] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  // async function getData() {
  //   const response = await dispatch(getInit());
  //   if (response.error) {
  //     return;
  //   }
  //   // console.log(response.data);
  // }
  // useState(() => {
  //   getData();
  // }, []);

  const hosts = useSelector(state => state.addSchedule.hosts).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const rooms = useSelector(state => state.addSchedule.rooms).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const defaultValues = {
    name: '',
    idMeetingRoom: 0,
    startDate: '',
    startTime: '',
    endTime: '',
    endDate: '',
    isRecurring: true,
    days: [0],
    idHost: 0,
    idParticipants: [],
    isOnHostVideo: true,
    isOnParticipantVideos: true,
    isOnDingDongSound: true,
    isUsePassCode: true,
    passCode: '',
    isBlocked: true,
  };
  const schema = yup.object().shape({
    name: yup.string().required(''),
  });
  const {
    control,
    handleSubmit,
    setFocus,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const submit = async data => {
    dispatch(dialogAction.showLoading());
    const result = await dispatch(AddSchedule(data));
    dispatch(dialogAction.dismissLoading());

    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
        Alert.alert(result.message),
      );
      return;
    }
    console.log(result);
    dispatch(dialogAction.showAlert(result.message, () => navigation.goBack()));
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
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <TextInput
            ref={ref}
            autoFocus
            value={value}
            onChangeText={onChange}
            style={styles.textinput}
            placeholder="Tên lịch họp"
            error={!!fieldError}
            hint={fieldError?.message}
          />
        )}
        name="name"
      />
      {errors.fullname && (
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          * Thông tin bắt buộc
        </Text>
      )}
      <Text style={styles.text}>Thời gian họp</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setOpenStart(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeStart).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <DatePicker
              modal
              mode="time"
              open={openStart}
              date={timeStart}
              onConfirm={timeStart => {
                setOpenStart(false);
                value = timeStart;
                setStart(timeStart);
                onChange = dayjs(timeStart).format('HH:mm[:00]');
                console.log(onChange);
              }}
              onCancel={() => {
                setOpenStart(false);
              }}
            />
          )}
          name="startTime"
        />
        <TouchableOpacity onPress={() => setOpenEnd(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(timeEnd).format('HH:mm A')}
          </Text>
        </TouchableOpacity>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <DatePicker
              modal
              mode="time"
              open={openEnd}
              date={timeEnd}
              onConfirm={timeEnd => {
                setOpenEnd(false);
                value = timeEnd;
                setEnd(timeEnd);
                onChange = dayjs(timeEnd).format('HH:mm[:00]');
                console.log(onChange);
              }}
              onCancel={() => {
                setOpenEnd(false);
              }}
            />
          )}
          name="endTime"
        />
      </View>
      <Text style={styles.text}>Ngày họp</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 10}}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
      </View>
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <DatePicker
            modal
            mode="date"
            open={openDate}
            date={date}
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
              onChange = dayjs(date).format('YYYY-MM-DDT[00:00:00]');
              console.log(onChange);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
        )}
        name="startDate"
      />
      <Controller
        control={control}
        render={({
          field: {onChange, value, ref},
          fieldState: {error: fieldError},
        }) => (
          <DatePicker
            modal
            mode="date"
            open={openDateEnd}
            date={dateEnd}
            onConfirm={date => {
              setOpenDate(false);
              setDateEnd(date);
              onChange = dayjs(date).format('YYYY-MM-DDT[00:00:00]');
              console.log(onChange);
            }}
            onCancel={() => {
              setOpenDateEnd(false);
            }}
          />
        )}
        name="endDate"
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}} />
      <Text style={styles.text}>Phòng họp</Text>
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
            open={open1}
            value={value}
            items={rooms}
            setOpen={setOpen1}
            setValue={onChange}
            setItems={rooms.label}
            onChangeValue={onChange}
            onPress={() => {
              dispatch(setRoom(value));
              console.log(value);
            }}
          />
        )}
        name="idMeetingRoom"
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
            open={open}
            value={value}
            items={hosts}
            setOpen={setOpen}
            setValue={onChange}
            setItems={hosts.label}
            onChangeValue={onChange}
            onPress={() => {
              dispatch(setRoom(value));
              console.log(value);
            }}
          />
        )}
        name="idHost"
      />
      <Text style={styles.text}>Đại biểu</Text>
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: 'white', true: '#65c1b6'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Lưu thông tin đăng nhập
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: 'white', true: '#65c1b6'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Lưu thông tin đăng nhập
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: 'white', true: '#65c1b6'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Lưu thông tin đăng nhập
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: 'white', true: '#65c1b6'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Lưu thông tin đăng nhập
        </Text>
      </View>

      <ButtonGradient text={'Tạo lịch'} onPress={handleSubmit(submit)} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  switch: {},
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
  textinput: {
    borderRadius: 5,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    maxWidth: 360,
    padding: 10,
  },
});
export default AddCalendar;
