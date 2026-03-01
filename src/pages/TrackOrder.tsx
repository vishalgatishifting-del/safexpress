import React, { useState } from "react";
import "../styles/TrackOrder.scss";

interface Order {
  trackingId: string;
  status: string;
  from: string;
  to: string;
  currentLocation: string;
  date: string;
}

const TrackOrder: React.FC = () => {

  const [trackingId, setTrackingId] = useState<string>("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // TEMP demo function (later replace with API)
  const handleTrack = async () => {

    if (!trackingId) {
      setError("Please enter tracking ID");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {

      if (trackingId === "GTI12345678") {

        setOrder({
          trackingId: "GTI12345678",
          status: "In Transit",
          from: "Delhi",
          to: "Mumbai",
          currentLocation: "Jaipur Hub",
          date: "18 Feb 2026"
        });

      } else {

        setError("Tracking ID not found");
        setOrder(null);

      }

      setLoading(false);

    }, 1000);

  };

  return (
    <div className="track-page">

      <div className="track-container">

        <h1>Track Your Order</h1>

        <div className="track-box">

          <input
            type="text"
            placeholder="Enter Tracking ID (e.g. GTI12345678)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
          />

          <button onClick={handleTrack}>
            {loading ? "Tracking..." : "Track Order"}
          </button>

        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {order && (

          <div className="order-result">

            <h2>Order Details</h2>

            <div className="details">

              <p>
                <strong>Tracking ID:</strong> {order.trackingId}
              </p>

              <p>
                <strong>Status:</strong>
                <span className="status">{order.status}</span>
              </p>

              <p>
                <strong>From:</strong> {order.from}
              </p>

              <p>
                <strong>To:</strong> {order.to}
              </p>

              <p>
                <strong>Current Location:</strong> {order.currentLocation}
              </p>

              <p>
                <strong>Date:</strong> {order.date}
              </p>

            </div>

            {/* Timeline */}

            <div className="timeline">

              <div className="step active">
                Order Placed
              </div>

              <div className="step active">
                Packed
              </div>

              <div className="step active">
                In Transit
              </div>

              <div className="step">
                Delivered
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );

};

export default TrackOrder;
