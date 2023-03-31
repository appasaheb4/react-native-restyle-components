import {PanResponder} from 'react-native';
...

```
const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: (evt: any) => {
        const testId = evt._targetInst?.memoizedProps?.testID;
        console.log({testId});
        switch (testId) {
          case 'text-input':
            return false;
          case 'plan-option':
            return false;
          default:
            Keyboard.dismiss();
            setMessage('');
            setIsPlanOptions(false);
            return true;
        }
      },
    }),
  ).current;

<Box {...panResponder.panHandlers}>
      <TextIconInput
          testId="text-input"
          ...
        />

<SingleSelectDropDown
          testId="plan-option"
         ...
        />
```

</Box>
