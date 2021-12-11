
const {StyleSheet} = require ('react-native');

export const styless = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },

  logo:{
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    marginBottom: 80,
    justifyContent: 'center',

  },

  containerinput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      width: '90%'
  },

  input:{
    backgroundColor: '#808080',
    width: '90%',
    marginBottom: 15,
    color: '#fff',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit:{
    width: '90%',
    height: 45,
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#ff0000',
    

  },
  submitText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  }, 

  btnRegister:{
    marginTop:20

  }, 
  registerText:{
    color: '#fff'

  },


})