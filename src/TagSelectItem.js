import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ViewPropTypes,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

TagSelectItem.propTypes = {
  label: PropTypes.string,

  // Callbacks
  onPress: PropTypes.func,

  // Indicate if the item is selected
  selected: PropTypes.bool,

  // Touch
  activeOpacity: PropTypes.number,

  // Styles
  theme: PropTypes.oneOf([
    'default',
    'inverse',
    'success',
    'info',
    'danger',
    'warning'
  ]),
  itemStyle: PropTypes.shape({
    style: PropTypes.any,
  }),
  itemStyleSelected: PropTypes.shape({
    style: PropTypes.any,
  }),
  itemLabelStyle: PropTypes.any,
  itemLabelStyleSelected: PropTypes.any
}

TagSelectItem.defaultProps = {
  label: null,
  onPress: null,
  selected: false,
  touchComponent: 'TouchableOpacity',
  activeOpacity: 0.5,
  theme: 'default',
  itemStyle: null,
  itemStyleSelected: null,
  itemLabelStyle: null,
  itemLabelStyleSelected: null
}

function TagSelectItem (props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={props.activeOpacity}
      >
      {props.selected ? 
        <LinearGradient
        style={{borderWidth: 0,
        borderRadius: 10}}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={['#276EB8', '#7E3DA4', '#DC088E']}
          >
    <View
      style={[
        styles.inner,
        styles[`gradientInner`],
        // props.itemStyle,
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          styles[`${props.theme}LabelText`],
          props.itemLabelStyle,
          props.selected && styles[`${props.theme}LabelTextSelected`],
          props.selected && props.itemLabelStyleSelected
        ]}
      >
        {props.label}
      </Text>
    </View>
    </LinearGradient>
       : 
        <View
          style={[
            styles.inner,
            styles[`${props.theme}Inner`],
            props.itemStyle,
            props.selected && styles[`${props.theme}InnerSelected`],
            props.selected && props.itemStyleSelected
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              styles[`${props.theme}LabelText`],
              props.itemLabelStyle,
              props.selected && styles[`${props.theme}LabelTextSelected`],
              props.selected && props.itemLabelStyleSelected
            ]}
          >
            {props.label}
          </Text>
        </View>
        }
      
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10
  },
  inner: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  gradientInner: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)'
  },
  defaultInner: {
    backgroundColor: '#f8f9fa',
    borderColor: '#f8f9fa'
  },
  defaultInnerSelected: {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d'
  },
  defaultLabelText: {
    color: '#333333'
  },
  defaultLabelTextSelected: {
    color: '#FFF'
  },
  inverseInner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#343a40'
  },
  inverseInnerSelected: {
    backgroundColor: '#343a40',
    borderColor: '#343a40'
  },
  inverseLabelText: {
    color: '#343a40'
  },
  inverseLabelTextSelected: {
    color: '#FFF'
  },
  successInner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#28a745'
  },
  successInnerSelected: {
    backgroundColor: '#28a745',
    borderColor: '#28a745'
  },
  successLabelText: {
    color: '#28a745'
  },
  successLabelTextSelected: {
    color: '#FFF'
  },
  infoInner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#007BFF'
  },
  infoInnerSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007BFE'
  },
  infoLabelText: {
    color: '#004085'
  },
  infoLabelTextSelected: {
    color: '#FFF'
  },
  warningInner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ffc107'
  },
  warningInnerSelected: {
    backgroundColor: '#ffc107',
    borderColor: '#ffc107'
  },
  warningLabelText: {
    color: '#333'
  },
  warningLabelTextSelected: {
    color: '#333'
  },
  dangerInner: {
    backgroundColor: '#FFFFFF',
    borderColor: '#dc3545'
  },
  dangerInnerSelected: {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545'
  },
  dangerLabelText: {
    color: '#dc3545'
  },
  dangerLabelTextSelected: {
    color: '#FFF'
  }
})

export default TagSelectItem

