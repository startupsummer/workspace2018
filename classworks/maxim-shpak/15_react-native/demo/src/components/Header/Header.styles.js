import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    height: 52,
    padding: 8,
  },
  content: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e9e9e9',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    color: '#505050',
  },
  button: {
    backgroundColor: '#f0f0f0',
    flex: 0,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
