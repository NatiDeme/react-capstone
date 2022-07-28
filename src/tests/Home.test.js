import React from 'react';
// import renderer from 'react-test-renderer';
import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Home from '../components/Home';
import store from '../redux/configureStore';

jest.mock('axios');

describe('The Contain component tested', () => {
  beforeEach(async () => {
    const result = {
      data: [
        {
          id: 9,
          name: 'npc_dota_hero_mirana',
          localized_name: 'Mirana',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Support',
            'Escape',
            'Nuker',
            'Disabler',
          ],
          img: '/apps/dota2/images/dota_react/heroes/mirana.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/mirana.png?',
          base_health: 200,
          base_health_regen: 0.25,
          base_mana: 75,
          base_mana_regen: 0.4,
          base_armor: -2,
          base_mr: 25,
          base_attack_min: 24,
          base_attack_max: 30,
          base_str: 18,
          base_agi: 24,
          base_int: 22,
          str_gain: 2.2,
          agi_gain: 3.4,
          int_gain: 1.9,
          attack_range: 630,
          projectile_speed: 900,
          attack_rate: 1.7,
          move_speed: 290,
          turn_rate: null,
          cm_enabled: true,
          legs: 2,
          hero_id: 9,
          turbo_picks: 364911,
          turbo_wins: 186026,
          pro_ban: 108,
          pro_win: 82,
          pro_pick: 169,
          '1_pick': 19068,
          '1_win': 9717,
          '2_pick': 39562,
          '2_win': 20324,
          '3_pick': 46046,
          '3_win': 23702,
          '4_pick': 37774,
          '4_win': 19577,
          '5_pick': 21703,
          '5_win': 11193,
          '6_pick': 9876,
          '6_win': 5073,
          '7_pick': 4659,
          '7_win': 2361,
          '8_pick': 1759,
          '8_win': 869,
          null_pick: 1757414,
          null_win: 0,
        },
        {
          id: 10,
          name: 'npc_dota_hero_morphling',
          localized_name: 'Morphling',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape',
            'Durable',
            'Nuker',
            'Disabler',
          ],
          img: '/apps/dota2/images/dota_react/heroes/morphling.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/morphling.png?',
          base_health: 200,
          base_health_regen: 0.25,
          base_mana: 75,
          base_mana_regen: 0,
          base_armor: -2,
          base_mr: 25,
          base_attack_min: 9,
          base_attack_max: 18,
          base_str: 22,
          base_agi: 24,
          base_int: 19,
          str_gain: 3,
          agi_gain: 3.9,
          int_gain: 1.8,
          attack_range: 350,
          projectile_speed: 1300,
          attack_rate: 1.5,
          move_speed: 285,
          turn_rate: 0.7,
          cm_enabled: true,
          legs: 0,
          hero_id: 10,
          turbo_picks: 257566,
          turbo_wins: 131044,
          pro_ban: 340,
          pro_win: 75,
          pro_pick: 156,
          '1_pick': 18722,
          '1_win': 9511,
          '2_pick': 23709,
          '2_win': 11889,
          '3_pick': 20837,
          '3_win': 10286,
          '4_pick': 16125,
          '4_win': 7766,
          '5_pick': 10219,
          '5_win': 4951,
          '6_pick': 5392,
          '6_win': 2618,
          '7_pick': 3180,
          '7_win': 1549,
          '8_pick': 1692,
          '8_win': 819,
          null_pick: 1052559,
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

  it('renders correctly', async () => {
    render(<Provider store={store}><Router><Home /></Router></Provider>);
    await waitFor(() => {
      expect(screen.getAllByAltText('icon').length).toBeGreaterThan(1);
    });
  });
});
