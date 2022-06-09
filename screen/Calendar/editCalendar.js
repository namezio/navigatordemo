import React, {useCallback, useState} from 'react';
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
import GradientText from '../../component/GradientText';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import ButtonGradient from '../../component/ButtonGradient';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {initData} from '../redux/action/InitAddSchedule';
import {
  AddSchedule,
  getInit,
  setPart,
  setRoom,
} from '../../redux/action/AddSchedule';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as dialogAction from '../../redux/action/Dialog';
import DropDownPicker from 'react-native-dropdown-picker';
import {getContact} from '../../redux/action/Contact';
import {GetSchedule} from '../../redux/action/GetSchedule';
import {edit} from '../../redux/action/EditSchedule';

function EditCalendar() {
  const [date, setDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [timeEnd, setEnd] = useState(new Date());
  const [timeStart, setStart] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  async function getCon() {
    const response = await dispatch(getContact());
    if (response.error) {
      return;
    }
  }
  const info = useSelector(state => state.getSchedule.info);
  console.log('edit', info);

  useFocusEffect(
    useCallback(() => {
      getCon();
    }, []),
  );
  const contacts = useSelector(state => state.contact.contacts).map(x => ({
    label: x.name,
    value: x.id.toString(),
  }));
  const idPart = info.participants.map(x => x.id.toString());
  const idHost = info.hosts.map(x => x.id);
  // const idRoom = info.rooms.map(x => ({id: x.id, name: x.name}));
  // console.log(idRoom);
  const [openPart, setOpenPart] = useState(false);
  const [valuePart, setValuePart] = useState(idPart);
  const hosts = useSelector(state => state.addSchedule.hosts).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const rooms = useSelector(state => state.addSchedule.rooms).map(x => ({
    value: x.id,
    label: x.name,
  }));
  const defaultValues = {
    id: info.idGet,
    name: info.name,
    idMeetingRoom: info.idMeetingRoom,
    isRecurring: info.isRecurring,
    days: [],
    idHost: info.idHost,
    isOnHostVideo: info.isOnHostVideo,
    isOnParticipantVideos: info.isOnParticipantVideos,
    isOnDingDongSound: info.isOnDingDongSound,
    isUsePassCode: info.isUsePassCode,
    passCode: info.passCode,
    isBlocked: info.isBlocked,
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
    const totaldata = {...data, ...dataBonus};
    dispatch(dialogAction.showLoading());
    const result = await dispatch(edit(totaldata));
    dispatch(dialogAction.dismissLoading());

    if (result.error) {
      dispatch(
        dialogAction.showAlert(result.message || 'error.connect_server_failed'),
        Alert.alert(result.message),
      );
      return;
    }
    // console.log(result);
    Alert.alert(result.message);
    navigation.goBack();
  };
  const dataBonus = {
    startDate: dayjs(date).format('YYYY-MM-DD'),
    startTime: dayjs(timeStart).format('HH:mm:ss'),
    endTime: dayjs(timeEnd).format('HH:mm:ss'),
    endDate: dayjs(dateEnd).format('YYYY-MM-DD'),
    idParticipants: valuePart,
  };
  // console.log(dataBonus);
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#09bcc8',
          marginBottom: 5,
        }}>
        Sửa lịch họp
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
      <Text style={styles.text}>Thời gian họp</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setOpenStart(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 5}}>
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
          }}
          onCancel={() => {
            setOpenStart(false);
          }}
        />

        <TouchableOpacity onPress={() => setOpenEnd(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 5}}>
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
          }}
          onCancel={() => {
            setOpenEnd(false);
          }}
        />
      </View>
      <Text style={styles.text}>Ngày họp</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 5}}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenDateEnd(true)}>
          <Text
            style={{fontSize: 20, color: 'red', fontWeight: '600', margin: 5}}>
            {dayjs(dateEnd).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
          // console.log(onChange);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
      <DatePicker
        modal
        mode="date"
        open={openDateEnd}
        date={dateEnd}
        onConfirm={date => {
          setOpenDate(false);
          setDateEnd(date);
          // console.log(onChange);
        }}
        onCancel={() => {
          setOpenDateEnd(false);
        }}
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
            value={info.RoomsID}
            items={rooms}
            setOpen={setOpen1}
            setValue={onChange}
            setItems={rooms.label}
            onChangeValue={onChange}
            onPress={() => {
              dispatch(setRoom(value));
              // console.log(value);
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
            value={info.HostsID}
            items={hosts}
            setOpen={setOpen}
            setValue={onChange}
            setItems={hosts.label}
            onChangeValue={onChange}
            onPress={() => {
              dispatch(setRoom(value));
              // console.log(value);
              // console.log('onchange', onChange);
            }}
          />
        )}
        name="idHost"
      />
      <Text style={styles.text}>Đại biểu</Text>
      <DropDownPicker
        zIndex={3000}
        zIndexInverse={1000}
        searchable={true}
        multiple={true}
        min={0}
        max={10}
        open={openPart}
        value={valuePart}
        items={contacts}
        setOpen={setOpenPart}
        setValue={setValuePart}
        setItems={contacts.label}
        onPress={() => {
          dispatch(setPart(valuePart));
        }}
      />
      <View style={styles.Viewswitch}>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <Switch
              style={styles.switch}
              trackColor={{false: 'white', true: '#65c1b6'}}
              thumbColor={value ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="isOnHostVideo"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Bật video của chủ tọa
        </Text>
      </View>
      <View style={styles.Viewswitch}>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <Switch
              style={styles.switch}
              trackColor={{false: 'white', true: '#65c1b6'}}
              thumbColor={value ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="isOnParticipantVideos"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Bật video của đại biểu
        </Text>
      </View>
      <View style={styles.Viewswitch}>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <Switch
              style={styles.switch}
              trackColor={{false: 'white', true: '#65c1b6'}}
              thumbColor={value ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="isOnDingDongSound"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Bật âm thanh đinh đong của phòng họp
        </Text>
      </View>
      <View style={styles.Viewswitch}>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <Switch
              style={styles.switch}
              trackColor={{false: 'white', true: '#65c1b6'}}
              thumbColor={value ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="isUsePassCode"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Sử dụng chức năng mật khẩu phòng họp
        </Text>
      </View>
      <View style={styles.Viewswitch}>
        <Controller
          control={control}
          render={({
            field: {onChange, value, ref},
            fieldState: {error: fieldError},
          }) => (
            <Switch
              style={styles.switch}
              trackColor={{false: 'white', true: '#65c1b6'}}
              thumbColor={value ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="isBlocked"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            fontSize: 14,
          }}>
          Khóa lịch họp
        </Text>
      </View>

      <ButtonGradient text={'Tạo lịch'} onPress={handleSubmit(submit)} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Viewswitch: {
    flexDirection: 'row',
  },
  switch: {
    transform: [{scaleX: 0.5}, {scaleY: 0.5}],
  },
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
export default EditCalendar;
