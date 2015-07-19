/// <reference path="../../index.module.ts" />

module myIoTapp {
  'use strict';

  export interface ILocationData {
    location: string
    room: IRoom
  }

  export interface IDescription {
    long: string
    short: string
  }

  export interface IComponent {
    name: string
    description: IDescription
    serial: string
    location: ILocationData
  }

  export interface IRoom {
    name: string
  }

  export class IoTService {
    public rooms: IRoom[];
    public components: IComponent[];

    public getRooms(): IRoom[] {
      return this.rooms;
    }

    public getComponents(): IComponent[] {
      return this.components;
    }

    /** @ngInject */
    constructor () {
      var rawComponent;
      var rawRoom;

      rawRoom = [
        {
          'name': 'Wohnzimmer'

        },
        {
          'name': 'Küche'

        },
        {
          'name': 'Schlafzimmer'
        },
        {
          'name': 'Bad'
        },
      ];

      rawComponent = [
        {
          'name': 'Thermostatregler',
          'description' : {
              'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
              'short': 'Zur Regelung der Raumtemperatur'

          },
          'serial': 'TR-1A41-7CB2-FB51-GH1E-70OA',
          'location': {
            'room': rawRoom[0],
            'location': 'Fenster Rechts'
          },
          'active': false,
        },
        {
          'name': 'Thermostatregler',
          'description' : {
            'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
            'short': 'Zur Regelung der Raumtemperatur'

          },
          'serial': 'TR-2A41-7CB2-FB51-GH1E-781B',
          'location': {
            'room': rawRoom[0],
            'location': 'Fenster Links'
          },
          'active': true,
        },
        {
          'name': 'Thermostatregler',
          'description' : {
            'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
            'short': 'Zur Regelung der Raumtemperatur'

          },
          'serial': 'TR-3A41-7CB2-FB51-GH1E-781C',
          'location': {
            'room': rawRoom[1],
            'location': 'Fenster'
          },
          'active': true,
        },
        {
          'name': 'Thermostatregler',
          'description' : {
            'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
            'short': 'Zur Regelung der Raumtemperatur'

          },
          'serial': 'TR-4A41-7CB2-FB51-GH1E-781D',
          'location': {
            'room': rawRoom[2],
            'location': 'Fenster'
          },
          'active': true,
        },
        {
          'name': 'Thermostatregler',
          'description' : {
            'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
            'short': 'Zur Regelung der Raumtemperatur'

          },
          'serial': 'TR-5A41-7CB2-FB51-GH1E-781E',
          'location': {
            'room': rawRoom[3],
            'location': 'Türe'
          },
          'active': true,
        },
        {
          'name': 'Thermometer',
          'description' : {
            'long': 'Misst die Temperatur. Somit lassen sich durch statistische Werte Prognosen bzw. historische Date darstellen.',
            'short': 'Messung der Temperatur'

          },
          'serial': 'TH-6A41-7CB2-FB51-GH1E-781F',
          'location': {
            'room': rawRoom[0],
            'location': 'Tisch'
          },
          'active': true,
        },
        {
          'name': 'Lichsensor',
          'description' : {
            'long': 'Misst die Leuchtkraft. Somit lassen sich durch statistische Werte Prognosen bzw. historische Date darstellen.',
            'short': 'Messung der Licheinstrahlung'

          },
          'serial': 'LS-7A41-7CB2-FB51-GH1E-781G',
          'location': {
            'room': rawRoom[0],
            'location': 'Eingangsbereich'
          },
          'active': true,
        },
        {
          'name': 'Web-Cam',
          'description' : {
            'long': 'Die Webcam lässt sich in 2 Dimentionen schwenken. Periodische Bilder lassen sich nachfollziehen .. Somit lässt sich im',
            'short': 'Steuerung der WebCam'

          },
          'serial': 'WC-8A41-7CB2-FB51-GH1E-781H',
          'location': {
            'room': rawRoom[0],
            'location': 'Eingangsbereich'
          },
          'active': true,
        },
        {
          'name': 'Ultraschall-Sensor',
          'description' : {
            'long': 'Es lassen sich Messen mit welche distanz sich Objekte vor dem Sensor bewegen.',
            'short': 'Misst Distanz zu Hindernissen'

          },
          'serial': 'US-9A41-7CB2-FB51-GH1E-781I',
          'location': {
            'room': rawRoom[0],
            'location': 'Mitte'
          },
          'active': true,
        },

      ];

      this.components = rawComponent;
      this.rooms = rawRoom;
    }
  }

}
