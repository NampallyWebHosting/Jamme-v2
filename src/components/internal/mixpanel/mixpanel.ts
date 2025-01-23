import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = "c3848172c3ecb5b14bc68cd729c93a11";

// Initialize Mixpanel
mixpanel.init(MIXPANEL_TOKEN, { debug: false });

/**
 * Interface for tracking properties.
 */
interface TrackingProperties {
  [key: string]: any;
}

const Mixpanel = {
  /**
   * Tracks an event in Mixpanel.
   * @param event - The name of the event to track.
   * @param properties - Additional properties to send with the event.
   */
  track: (event: string, properties?: TrackingProperties): void => {
    mixpanel.track(event, properties);
  },

  /**
   * Identifies a user in Mixpanel.
   * @param id - The unique identifier for the user.
   */
  identify: (id: string): void => {
    mixpanel.identify(id);
  },

  /**
   * Sets user properties in Mixpanel.
   * @param properties - An object containing user properties.
   */
  setUserProperties: (properties: TrackingProperties): void => {
    mixpanel.people.set(properties);
  },
};

export default Mixpanel;
