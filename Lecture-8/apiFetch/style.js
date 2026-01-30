import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

  pageContainer: {
    backgroundColor: 'black',
    flex: 1,
  },

  headerView: {
    marginVertical: 15,
  },

  headerText: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },

  post: {
    marginHorizontal: 15,
    // backgroundColor: 'blue',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
  },
  postImage: {
    width: '100%',
    height: 200,       
    borderRadius: 15,
    resizeMode: 'cover',
  },

  postText: {
    color: 'white',
    marginTop: 10,
  },
});
