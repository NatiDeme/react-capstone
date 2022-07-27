import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import Strength from '../components/Strength';
import store from '../redux/configureStore';

jest.mock('axios');

describe('The Strength Heroes list is tested', () => {
  beforeEach(async () => {
    const result = {
      data: [
        {
          id: 1,
          name: 'npc_dota_hero_antimage',
          localized_name: 'Anti-Mage',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Nuker',
          ],
          img: '/apps/dota2/images/dota_react/heroes/antimage.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/antimage.png?',
          base_health: 200,
          base_health_regen: 0.25,
          base_mana: 75,
          base_mana_regen: 0,
          base_armor: 0,
          base_mr: 25,
          base_attack_min: 29,
          base_attack_max: 33,
          base_str: 21,
          base_agi: 24,
          base_int: 12,
          str_gain: 1.6,
          agi_gain: 2.8,
          int_gain: 1.8,
          attack_range: 150,
          projectile_speed: 0,
          attack_rate: 1.4,
          move_speed: 310,
          turn_rate: null,
          cm_enabled: true,
          legs: 2,
          hero_id: 1,
          turbo_picks: 383245,
          turbo_wins: 194646,
          pro_ban: 253,
          pro_win: 28,
          pro_pick: 60,
          '1_pick': 25823,
          '1_win': 12333,
          '2_pick': 41364,
          '2_win': 19778,
          '3_pick': 40917,
          '3_win': 19547,
          '4_pick': 30460,
          '4_win': 14391,
          '5_pick': 16644,
          '5_win': 7681,
          '6_pick': 7196,
          '6_win': 3252,
          '7_pick': 3289,
          '7_win': 1514,
          '8_pick': 1004,
          '8_win': 449,
          null_pick: 2004169,
          null_win: 0,
        },
        {
          id: 2,
          name: 'npc_dota_hero_axe',
          localized_name: 'Axe',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Durable',
            'Disabler',
            'Jungler',
            'Carry',
          ],
          img: '/apps/dota2/images/dota_react/heroes/axe.png?',
          icon: '/apps/dota2/images/dota_react/heroes/icons/axe.png?',
          base_health: 200,
          base_health_regen: 2.75,
          base_mana: 75,
          base_mana_regen: 0,
          base_armor: -1,
          base_mr: 25,
          base_attack_min: 27,
          base_attack_max: 31,
          base_str: 25,
          base_agi: 20,
          base_int: 18,
          str_gain: 3.4,
          agi_gain: 2.2,
          int_gain: 1.6,
          attack_range: 150,
          projectile_speed: 900,
          attack_rate: 1.7,
          move_speed: 310,
          turn_rate: null,
          cm_enabled: true,
          legs: 2,
          hero_id: 2,
          turbo_picks: 490057,
          turbo_wins: 264685,
          pro_ban: 35,
          pro_win: 29,
          pro_pick: 67,
          '1_pick': 36713,
          '1_win': 20493,
          '2_pick': 60179,
          '2_win': 32874,
          '3_pick': 57377,
          '3_win': 30799,
          '4_pick': 41813,
          '4_win': 21975,
          '5_pick': 22759,
          '5_win': 11714,
          '6_pick': 10102,
          '6_win': 5093,
          '7_pick': 4560,
          '7_win': 2253,
          '8_pick': 1238,
          '8_win': 568,
          null_pick: 2163898,
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

  test('should render the strength heroes page', async () => {
    render(<Provider store={store}><Strength /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByAltText('hero').length).toBeGreaterThan(1);
    });
  });
});
