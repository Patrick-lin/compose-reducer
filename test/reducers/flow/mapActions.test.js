import { mapActions } from '../../../src';
import { TrackingState } from '../../../src/helpers/trackingState';

describe('reducers', () => {
  describe('flow', () => {
    describe('mapActions', () => {
      let trackingState;
      beforeEach(() => {
        trackingState = new TrackingState();
      });

      it('apply composable reducer on each resolved actions', () => {
        const actions = [];
        const composableReducer = jest.fn().mockImplementation(ts => {
          actions.push(ts.action);
        });
        mapActions(
          () => ['item1', 'item2', 'item3'],
          composableReducer
        )(trackingState);
        expect(composableReducer).toHaveBeenCalledTimes(3);
        expect(actions).toEqual(['item1', 'item2', 'item3']);
      });

      it('apply composable reducer on each static actions', () => {
        const actions = [];
        const composableReducer = jest.fn().mockImplementation(ts => {
          actions.push(ts.action);
        });
        mapActions(
          ['item1', 'item2', 'item3'],
          composableReducer
        )(trackingState);
        expect(composableReducer).toHaveBeenCalledTimes(3);
        expect(actions).toEqual(['item1', 'item2', 'item3']);
      });
    });
  });
});
