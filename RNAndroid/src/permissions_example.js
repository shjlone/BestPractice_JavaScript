import { Button, View } from "react-native";
import { PERMISSIONS, RESULTS, check, checkMultiple, openSettings, request, requestMultiple } from "react-native-permissions";



function PermissionExampleScreen({ }) {
  return (
    <View>
      <Button title='Camera权限' onPress={async () => {
        check(PERMISSIONS.ANDROID.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                break;
              case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                  console.log('>>>>>>>>>', result);
                })
                break;
              case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                break;
              case RESULTS.GRANTED:
                console.log('The permission is granted');
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
              default:
                console.log('default');
            }
          }).catch((error) => {
            console.log(error);
            alert(error, '123123');
          });
      }} />

      <Button title="存储权限" onPress={ async () => {
        check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                break;
              case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result) => {
                  console.log('>>>>>>>>>', result);
                })
                break;
              case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                break;
              case RESULTS.GRANTED:
                console.log('The permission is granted');
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
              default:
                console.log('default');
            }
          }).catch((error) => {
            console.log(error);
            alert(error, '123123');
          });
      }}/>

      <Button title="打开应用设置" onPress={() => {
        openSettings().catch(() => console.warn('cannot open settings'));
      } } />

      <Button title="同时请求多个权限" onPress={ async () => {
        const result = await requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
        console.log('result', result);
      } }/>
    </View>
  );
}


export default PermissionExampleScreen