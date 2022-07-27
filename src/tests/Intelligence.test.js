import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import Intelligence from '../components/Intelligence';
import store from '../redux/configureStore';

jest.mock('axios');

describe('The Intelligence Heroes list is tested', () => {
  beforeEach(async () => {
    const result = {
      data: [
        {
          id: 6,
          name: 'npc_dota_hero_drow_ranger',
          localized_name: 'Drow Ranger',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Disabler',
            'Pusher',
          ],
          img: '/apps/dota2/images/dota_react/heroes/drow_ranger.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/drow_ranger.png?',
          base_health: 200,
          base_health_regen: 0.25,
          base_mana: 75,
          base_mana_regen: 0,
          base_armor: 0,
          base_mr: 25,
          base_attack_min: 29,
          base_attack_max: 36,
          base_str: 16,
          base_agi: 20,
          base_int: 15,
          str_gain: 1.9,
          agi_gain: 2.9,
          int_gain: 1.4,
          attack_range: 625,
          projectile_speed: 1250,
          attack_rate: 1.7,
          move_speed: 295,
          turn_rate: 0.7,
          cm_enabled: true,
          legs: 2,
          hero_id: 6,
          turbo_picks: 889903,
          turbo_wins: 481785,
          pro_ban: 43,
          pro_win: 12,
          pro_pick: 27,
          '1_pick': 40227,
          '1_win': 21255,
          '2_pick': 58808,
          '2_win': 30977,
          '3_pick': 54611,
          '3_win': 28674,
          '4_pick': 39435,
          '4_win': 20424,
          '5_pick': 20894,
          '5_win': 10723,
          '6_pick': 8699,
          '6_win': 4383,
          '7_pick': 3441,
          '7_win': 1697,
          '8_pick': 879,
          '8_win': 417,
          null_pick: 2412140,
          null_win: 0,
        },
        {
          id: 7,
          name: 'npc_dota_hero_earthshaker',
          localized_name: 'Earthshaker',
          primary_attr: 'int',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Initiator',
            'Disabler',
            'Nuker',
          ],
          img: '/apps/dota2/images/dota_react/heroes/earthshaker.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/earthshaker.png?',
          base_health: 200,
          base_health_regen: 1,
          base_mana: 75,
          base_mana_regen: 0,
          base_armor: 2,
          base_mr: 25,
          base_attack_min: 27,
          base_attack_max: 37,
          base_str: 22,
          base_agi: 12,
          base_int: 18,
          str_gain: 3.7,
          agi_gain: 1.4,
          int_gain: 2.1,
          attack_range: 150,
          projectile_speed: 0,
          attack_rate: 1.7,
          move_speed: 315,
          turn_rate: 0.9,
          cm_enabled: true,
          legs: 2,
          hero_id: 7,
          turbo_picks: 482659,
          turbo_wins: 239551,
          pro_ban: 25,
          pro_win: 19,
          pro_pick: 36,
          '1_pick': 22059,
          '1_win': 10952,
          '2_pick': 35846,
          '2_win': 17762,
          '3_pick': 39002,
          '3_win': 19373,
          '4_pick': 31778,
          '4_win': 15806,
          '5_pick': 18601,
          '5_win': 9255,
          '6_pick': 8406,
          '6_win': 4275,
          '7_pick': 4177,
          '7_win': 2144,
          '8_pick': 1326,
          '8_win': 660,
          null_pick: 1556831,
          null_win: 0,
        },
      ],
    };
    await axios.get.mockResolvedValue(result);
  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'GET_HEROES',
      payload: [],
    }));
  });

  test('should render the Intelligence heroes page', async () => {
    render(<Provider store={store}><Intelligence /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByAltText('hero').length).toBeGreaterThan(1);
    });
  });
});
