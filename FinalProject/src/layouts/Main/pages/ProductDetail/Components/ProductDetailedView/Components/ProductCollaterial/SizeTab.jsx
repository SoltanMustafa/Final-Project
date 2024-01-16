import React from "react";

export default function SizeTab() {
  return (
    <>
      <div className="row size-tab">
        <table className="size-table">
          <thead>
            <tr>
              <th>SIZE</th>
              <th>CHEST(IN.)</th>
              <th>WAIST(IN.)</th>
              <th>HIPS(IN.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>xs</th>
              <td>34-36</td>
              <td>27-29</td>
              <td>34.5-36.5</td>
            </tr>
            <tr>
              <th>s</th>
              <td>36-38</td>
              <td>29-31</td>
              <td>36.5-38.5</td>
            </tr>
            <tr>
              <th>m</th>
              <td>38-40</td>
              <td>31-33</td>
              <td>38.5-40.5</td>
            </tr>
            <tr>
              <th>l</th>
              <td>40-42</td>
              <td>33-36</td>
              <td>40.5-43.5</td>
            </tr>
            <tr>
              <th>xl</th>
              <td>42-45</td>
              <td>36-40</td>
              <td>43.5-47.5</td>
            </tr>
            <tr>
              <th>xxl</th>
              <td>45-48</td>
              <td>40-44</td>
              <td>47.5-51.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
