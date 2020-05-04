import filterReducers from '../../reducers/filters';
import moment from 'moment';
test ('should setup default filter value',() =>{
    const state= filterReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount',() =>{
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date',() =>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducers(currentState, action)
    expect(state.sortBy).toBe('date');
})

test('sholud set text filter',() =>{
    const state = filterReducers(undefined,{type: 'SET_TEXT',text: 'abc'})
    expect(state.text).toBe('abc')
})

test('should set startDate filter',() =>{
    const state = filterReducers(undefined,{type: 'SET_START_DATE', date: moment(0).startOf('month')})
    expect(state.startDate).toEqual(moment(0).startOf('month'))
})

test('should set endDate filter',() =>{
    const state = filterReducers(undefined,{type: 'SET_END_DATE', date: moment(0).endOf('month')})
    expect(state.endDate).toEqual(moment(0).endOf('month'))
})

